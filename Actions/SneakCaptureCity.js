"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SneakCaptureCity = void 0;
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Actions_1 = require("../Actions");
class SneakCaptureCity extends Actions_1.CaptureCity {
    constructor(from, to, unit, city, enemy, ruleRegistry = RuleRegistry_1.instance) {
        super(from, to, unit, city, ruleRegistry);
        this._enemy = enemy;
        this.addKey('enemy');
    }
    enemy() {
        return this._enemy;
    }
}
exports.SneakCaptureCity = SneakCaptureCity;
exports.default = SneakCaptureCity;
//# sourceMappingURL=SneakCaptureCity.js.map