"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Overruled = void 0;
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Action_1 = require("@civ-clone/core-unit/Action");
const Moved_1 = require("@civ-clone/core-unit/Rules/Moved");
const ValidateMove_1 = require("@civ-clone/core-unit/Rules/ValidateMove");
/**
 * Offered in place of `action`, which would break a treaty, when the player
 * isn't free to break it: choosing it does nothing but spend `moves`. `action`
 * is never performed; it says what was asked for (its enemy, a Diplomat's
 * price).
 */
class Overruled extends Action_1.default {
    constructor(from, to, unit, action, moves = 0, ruleRegistry = RuleRegistry_1.instance) {
        super(from, to, unit, ruleRegistry);
        this._action = action;
        this._moves = moves;
        this.addKey('action', 'moves');
    }
    action() {
        return this._action;
    }
    moves() {
        return this._moves;
    }
    partner() {
        return this._action.enemy();
    }
    perform() {
        if (this._moves <= 0) {
            return;
        }
        this.ruleRegistry().process(ValidateMove_1.default, this.unit(), this._moves);
        this.ruleRegistry().process(Moved_1.default, this.unit(), this);
    }
}
exports.Overruled = Overruled;
exports.default = Overruled;
//# sourceMappingURL=Overruled.js.map