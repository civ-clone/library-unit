"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SneakPillage = void 0;
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const TileImprovementRegistry_1 = require("@civ-clone/core-tile-improvement/TileImprovementRegistry");
const Turn_1 = require("@civ-clone/core-turn-based-game/Turn");
const Actions_1 = require("../Actions");
class SneakPillage extends Actions_1.Pillage {
    constructor(from, to, unit, enemy, ruleRegistry = RuleRegistry_1.instance, tileImprovementRegistry = TileImprovementRegistry_1.instance, turn = Turn_1.instance) {
        super(from, to, unit, ruleRegistry, tileImprovementRegistry, turn);
        this._enemy = enemy;
        this.addKey('enemy');
    }
    enemy() {
        return this._enemy;
    }
}
exports.SneakPillage = SneakPillage;
exports.default = SneakPillage;
//# sourceMappingURL=SneakPillage.js.map