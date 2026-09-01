"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetHomeCity = void 0;
const CityRegistry_1 = require("@civ-clone/core-city/CityRegistry");
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Action_1 = require("@civ-clone/core-unit/Action");
class SetHomeCity extends Action_1.default {
    constructor(from, to, unit, ruleRegistry = RuleRegistry_1.instance, cityRegistry = CityRegistry_1.instance) {
        super(from, to, unit, ruleRegistry);
        this._cityRegistry = cityRegistry;
    }
    perform(...args) {
        const targetCity = this._cityRegistry.getByTile(this.from());
        if (!targetCity) {
            return;
        }
        this.unit().setCity(targetCity);
    }
}
exports.SetHomeCity = SetHomeCity;
exports.default = SetHomeCity;
//# sourceMappingURL=SetHomeCity.js.map