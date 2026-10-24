"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SneakMove = void 0;
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Action_1 = require("@civ-clone/core-unit/Action");
const Actions_1 = require("../Actions");
const Moved_1 = require("@civ-clone/core-unit/Rules/Moved");
/**
 * A move onto `enemy`'s land that breaks a treaty with it.
 *
 * Not a `Move`: whatever takes any `Move` it's offered (following a route, a
 * computer player's step) would break the treaty without meaning to. It costs
 * what a `Move` onto the same tile would.
 */
class SneakMove extends Action_1.default {
    constructor(from, to, unit, enemy, ruleRegistry = RuleRegistry_1.instance) {
        super(from, to, unit, ruleRegistry);
        this._enemy = enemy;
        this.addKey('enemy');
    }
    enemy() {
        return this._enemy;
    }
    perform() {
        if (!new Actions_1.Move(this.from(), this.to(), this.unit(), this.ruleRegistry()).validate()) {
            return false;
        }
        this.unit().setTile(this.to());
        this.ruleRegistry().process(Moved_1.default, this.unit(), this);
        return true;
    }
}
exports.SneakMove = SneakMove;
exports.default = SneakMove;
//# sourceMappingURL=SneakMove.js.map