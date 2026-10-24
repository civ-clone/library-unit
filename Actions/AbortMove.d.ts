import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Action from '@civ-clone/core-unit/Action';
import Player from '@civ-clone/core-player/Player';
import Tile from '@civ-clone/core-world/Tile';
import Unit from '@civ-clone/core-unit/Unit';
/**
 * A move onto `partner`'s land called off to keep a treaty with it: the unit
 * stays where it is, but spends what the move would have cost.
 */
export declare class AbortMove extends Action {
  private _partner;
  constructor(
    from: Tile,
    to: Tile,
    unit: Unit,
    partner: Player,
    ruleRegistry?: RuleRegistry
  );
  partner(): Player;
  perform(): void;
}
export default AbortMove;
