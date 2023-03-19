import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import { CaptureCity } from '../Actions';
import City from '@civ-clone/core-city/City';
import Player from '@civ-clone/core-player/Player';
import Tile from '@civ-clone/core-world/Tile';
import Unit from '@civ-clone/core-unit/Unit';

export class SneakCaptureCity extends CaptureCity {
  #enemy: Player;

  constructor(
    from: Tile,
    to: Tile,
    unit: Unit,
    city: City,
    enemy: Player,
    ruleRegistry: RuleRegistry = ruleRegistryInstance
  ) {
    super(from, to, unit, city, ruleRegistry);

    this.#enemy = enemy;

    this.addKey('enemy');
  }

  enemy(): Player {
    return this.#enemy;
  }
}

export default SneakCaptureCity;
