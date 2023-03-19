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
var _SneakAttack_enemy;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SneakAttack = void 0;
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const UnitRegistry_1 = require("@civ-clone/core-unit/UnitRegistry");
const Actions_1 = require("../Actions");
class SneakAttack extends Actions_1.Attack {
    constructor(from, to, unit, enemy, ruleRegistry = RuleRegistry_1.instance, unitRegistry = UnitRegistry_1.instance) {
        super(from, to, unit, ruleRegistry, unitRegistry);
        _SneakAttack_enemy.set(this, void 0);
        __classPrivateFieldSet(this, _SneakAttack_enemy, enemy, "f");
        this.addKey('enemy');
    }
    enemy() {
        return __classPrivateFieldGet(this, _SneakAttack_enemy, "f");
    }
}
exports.SneakAttack = SneakAttack;
_SneakAttack_enemy = new WeakMap();
exports.default = SneakAttack;
//# sourceMappingURL=SneakAttack.js.map