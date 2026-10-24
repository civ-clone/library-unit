import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import Action from '@civ-clone/core-unit/Action';
import { Move } from '../Actions';
import Moved from '@civ-clone/core-unit/Rules/Moved';
import Player from '@civ-clone/core-player/Player';
import Tile from '@civ-clone/core-world/Tile';
import Unit from '@civ-clone/core-unit/Unit';

/**
 * A move onto `partner`'s land called off to keep a treaty with it: the unit
 * stays where it is, but spends what the move would have cost.
 */
export class AbortMove extends Action {
  private _partner: Player;

  constructor(
    from: Tile,
    to: Tile,
    unit: Unit,
    partner: Player,
    ruleRegistry: RuleRegistry = ruleRegistryInstance
  ) {
    super(from, to, unit, ruleRegistry);

    this._partner = partner;

    this.addKey('partner');
  }

  partner(): Player {
    return this._partner;
  }

  perform(): void {
    new Move(
      this.from(),
      this.to(),
      this.unit(),
      this.ruleRegistry()
    ).validate();

    this.ruleRegistry().process(Moved, this.unit(), this as Action);
  }
}

export default AbortMove;
