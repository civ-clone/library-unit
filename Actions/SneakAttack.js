"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SneakAttack = void 0;
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const UnitRegistry_1 = require("@civ-clone/core-unit/UnitRegistry");
const Actions_1 = require("../Actions");
class SneakAttack extends Actions_1.Attack {
    constructor(from, to, unit, enemy, ruleRegistry = RuleRegistry_1.instance, unitRegistry = UnitRegistry_1.instance) {
        super(from, to, unit, ruleRegistry, unitRegistry);
        this._enemy = enemy;
        this.addKey('enemy');
    }
    enemy() {
        return this._enemy;
    }
}
exports.SneakAttack = SneakAttack;
exports.default = SneakAttack;
//# sourceMappingURL=SneakAttack.js.map