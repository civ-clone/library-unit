import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import Action from '@civ-clone/core-unit/Action';
import Moved from '@civ-clone/core-unit/Rules/Moved';
import Player from '@civ-clone/core-player/Player';
import Tile from '@civ-clone/core-world/Tile';
import Unit from '@civ-clone/core-unit/Unit';
import ValidateMove from '@civ-clone/core-unit/Rules/ValidateMove';

/**
 * Offered in place of `action`, which would break a treaty, when the player
 * isn't free to break it: choosing it does nothing but spend `moves`. `action`
 * is never performed; it says what was asked for (its enemy, a Diplomat's
 * price).
 */
export class Overruled extends Action {
  private _action: Action;
  private _moves: number;

  constructor(
    from: Tile,
    to: Tile,
    unit: Unit,
    action: Action,
    moves: number = 0,
    ruleRegistry: RuleRegistry = ruleRegistryInstance
  ) {
    super(from, to, unit, ruleRegistry);

    this._action = action;
    this._moves = moves;

    this.addKey('action', 'moves');
  }

  action(): Action {
    return this._action;
  }

  moves(): number {
    return this._moves;
  }

  partner(): Player {
    return (this._action as unknown as { enemy(): Player }).enemy();
  }

  perform(): void {
    if (this._moves <= 0) {
      return;
    }

    this.ruleRegistry().process(ValidateMove, this.unit(), this._moves);
    this.ruleRegistry().process(Moved, this.unit(), this as Action);
  }
}

export default Overruled;
