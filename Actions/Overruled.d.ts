import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Action from '@civ-clone/core-unit/Action';
import Player from '@civ-clone/core-player/Player';
import Tile from '@civ-clone/core-world/Tile';
import Unit from '@civ-clone/core-unit/Unit';
/**
 * Offered in place of `action`, which would break a treaty, when the player
 * isn't free to break it: choosing it does nothing but spend `moves`. `action`
 * is never performed; it says what was asked for (its enemy, a Diplomat's
 * price).
 */
export declare class Overruled extends Action {
  private _action;
  private _moves;
  constructor(
    from: Tile,
    to: Tile,
    unit: Unit,
    action: Action,
    moves?: number,
    ruleRegistry?: RuleRegistry
  );
  action(): Action;
  moves(): number;
  partner(): Player;
  perform(): void;
}
export default Overruled;
