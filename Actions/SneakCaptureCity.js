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
var _SneakCaptureCity_enemy;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SneakCaptureCity = void 0;
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Actions_1 = require("../Actions");
class SneakCaptureCity extends Actions_1.CaptureCity {
    constructor(from, to, unit, city, enemy, ruleRegistry = RuleRegistry_1.instance) {
        super(from, to, unit, city, ruleRegistry);
        _SneakCaptureCity_enemy.set(this, void 0);
        __classPrivateFieldSet(this, _SneakCaptureCity_enemy, enemy, "f");
        this.addKey('enemy');
    }
    enemy() {
        return __classPrivateFieldGet(this, _SneakCaptureCity_enemy, "f");
    }
}
exports.SneakCaptureCity = SneakCaptureCity;
_SneakCaptureCity_enemy = new WeakMap();
exports.default = SneakCaptureCity;
//# sourceMappingURL=SneakCaptureCity.js.map