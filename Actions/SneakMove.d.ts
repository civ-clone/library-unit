import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import Action from '@civ-clone/core-unit/Action';
import Player from '@civ-clone/core-player/Player';
import Tile from '@civ-clone/core-world/Tile';
import Unit from '@civ-clone/core-unit/Unit';
/**
 * A move onto `enemy`'s land that breaks a treaty with it.
 *
 * Not a `Move`: whatever takes any `Move` it's offered (following a route, a
 * computer player's step) would break the treaty without meaning to. It costs
 * what a `Move` onto the same tile would.
 */
export declare class SneakMove extends Action {
  private _enemy;
  constructor(
    from: Tile,
    to: Tile,
    unit: Unit,
    enemy: Player,
    ruleRegistry?: RuleRegistry
  );
  enemy(): Player;
  perform(): boolean;
}
export default SneakMove;
