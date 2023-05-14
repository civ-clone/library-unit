import {
  CityRegistry,
  instance as cityRegistryInstance,
} from '@civ-clone/core-city/CityRegistry';
import {
  RuleRegistry,
  instance as ruleRegistryInstance,
} from '@civ-clone/core-rule/RuleRegistry';
import Action from '@civ-clone/core-unit/Action';
import Tile from '@civ-clone/core-world/Tile';
import Unit from '@civ-clone/core-unit/Unit';

export class SetHomeCity extends Action {
  #cityRegistry: CityRegistry;

  constructor(
    from: Tile,
    to: Tile,
    unit: Unit,
    ruleRegistry: RuleRegistry = ruleRegistryInstance,
    cityRegistry: CityRegistry = cityRegistryInstance
  ) {
    super(from, to, unit, ruleRegistry);

    this.#cityRegistry = cityRegistry;
  }
  perform(...args: any[]): void {
    const targetCity = this.#cityRegistry.getByTile(this.from());

    if (!targetCity) {
      return;
    }

    this.unit().setCity(targetCity);
  }
}

export default SetHomeCity;
