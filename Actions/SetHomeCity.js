"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SetHomeCity_cityRegistry;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetHomeCity = void 0;
const CityRegistry_1 = require("@civ-clone/core-city/CityRegistry");
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Action_1 = require("@civ-clone/core-unit/Action");
class SetHomeCity extends Action_1.default {
    constructor(from, to, unit, ruleRegistry = RuleRegistry_1.instance, cityRegistry = CityRegistry_1.instance) {
        super(from, to, unit, ruleRegistry);
        _SetHomeCity_cityRegistry.set(this, void 0);
        __classPrivateFieldSet(this, _SetHomeCity_cityRegistry, cityRegistry, "f");
    }
    perform(...args) {
        const targetCity = __classPrivateFieldGet(this, _SetHomeCity_cityRegistry, "f").getByTile(this.from());
        if (!targetCity) {
            return;
        }
        this.unit().setCity(targetCity);
    }
}
exports.SetHomeCity = SetHomeCity;
_SetHomeCity_cityRegistry = new WeakMap();
exports.default = SetHomeCity;
//# sourceMappingURL=SetHomeCity.js.map