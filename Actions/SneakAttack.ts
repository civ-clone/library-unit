import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import {
  UnitRegistry,
  instance as unitRegistryInstance,
} from '@civ-clone/core-unit/UnitRegistry';
import { Attack } from '../Actions';
import Player from '@civ-clone/core-player/Player';
import Tile from '@civ-clone/core-world/Tile';
import Unit from '@civ-clone/core-unit/Unit';

export class SneakAttack extends Attack {
  #enemy: Player;

  constructor(
    from: Tile,
    to: Tile,
    unit: Unit,
    enemy: Player,
    ruleRegistry: RuleRegistry = ruleRegistryInstance,
    unitRegistry: UnitRegistry = unitRegistryInstance
  ) {
    super(from, to, unit, ruleRegistry, unitRegistry);

    this.#enemy = enemy;

    this.addKey('enemy');
  }

  enemy(): Player {
    return this.#enemy;
  }
}

export default SneakAttack;
