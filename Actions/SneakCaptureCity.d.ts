import { RuleRegistry } from '@civ-clone/core-rule/RuleRegistry';
import { CaptureCity } from '../Actions';
import City from '@civ-clone/core-city/City';
import Player from '@civ-clone/core-player/Player';
import Tile from '@civ-clone/core-world/Tile';
import Unit from '@civ-clone/core-unit/Unit';
export declare class SneakCaptureCity extends CaptureCity {
  #private;
  constructor(
    from: Tile,
    to: Tile,
    unit: Unit,
    city: City,
    enemy: Player,
    ruleRegistry?: RuleRegistry
  );
  enemy(): Player;
}
export default SneakCaptureCity;
