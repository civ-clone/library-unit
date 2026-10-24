import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import { TileImprovementRegistry } from '@civ-clone/core-tile-improvement/TileImprovementRegistry';
import { Turn } from '@civ-clone/core-turn-based-game/Turn';
import { Pillage } from '../Actions';
import Player from '@civ-clone/core-player/Player';
import Tile from '@civ-clone/core-world/Tile';
import Unit from '@civ-clone/core-unit/Unit';
export declare class SneakPillage extends Pillage {
  private _enemy;
  constructor(
    from: Tile,
    to: Tile,
    unit: Unit,
    enemy: Player,
    ruleRegistry?: RuleRegistry,
    tileImprovementRegistry?: TileImprovementRegistry,
    turn?: Turn
  );
  enemy(): Player;
}
export default SneakPillage;
