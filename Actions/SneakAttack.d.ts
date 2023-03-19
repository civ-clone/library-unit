import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import { UnitRegistry } from '@civ-clone/core-unit/UnitRegistry';
import { Attack } from '../Actions';
import Player from '@civ-clone/core-player/Player';
import Tile from '@civ-clone/core-world/Tile';
import Unit from '@civ-clone/core-unit/Unit';
export declare class SneakAttack extends Attack {
  #private;
  constructor(
    from: Tile,
    to: Tile,
    unit: Unit,
    enemy: Player,
    ruleRegistry?: RuleRegistry,
    unitRegistry?: UnitRegistry
  );
  enemy(): Player;
}
export default SneakAttack;
