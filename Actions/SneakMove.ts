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
 * A move onto `enemy`'s land that breaks a treaty with it.
 *
 * Not a `Move`: whatever takes any `Move` it's offered (following a route, a
 * computer player's step) would break the treaty without meaning to. It costs
 * what a `Move` onto the same tile would.
 */
export class SneakMove extends Action {
  private _enemy: Player;

  constructor(
    from: Tile,
    to: Tile,
    unit: Unit,
    enemy: Player,
    ruleRegistry: RuleRegistry = ruleRegistryInstance
  ) {
    super(from, to, unit, ruleRegistry);

    this._enemy = enemy;

    this.addKey('enemy');
  }

  enemy(): Player {
    return this._enemy;
  }

  perform(): boolean {
    if (
      !new Move(
        this.from(),
        this.to(),
        this.unit(),
        this.ruleRegistry()
      ).validate()
    ) {
      return false;
    }

    this.unit().setTile(this.to());
    this.ruleRegistry().process(Moved, this.unit(), this as Action);

    return true;
  }
}

export default SneakMove;
