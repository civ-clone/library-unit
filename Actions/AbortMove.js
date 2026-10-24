"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbortMove = void 0;
const RuleRegistry_1 = require("@civ-clone/core-rule/RuleRegistry");
const Action_1 = require("@civ-clone/core-unit/Action");
const Actions_1 = require("../Actions");
const Moved_1 = require("@civ-clone/core-unit/Rules/Moved");
/**
 * A move onto `partner`'s land called off to keep a treaty with it: the unit
 * stays where it is, but spends what the move would have cost.
 */
class AbortMove extends Action_1.default {
    constructor(from, to, unit, partner, ruleRegistry = RuleRegistry_1.instance) {
        super(from, to, unit, ruleRegistry);
        this._partner = partner;
        this.addKey('partner');
    }
    partner() {
        return this._partner;
    }
    perform() {
        new Actions_1.Move(this.from(), this.to(), this.unit(), this.ruleRegistry()).validate();
        this.ruleRegistry().process(Moved_1.default, this.unit(), this);
    }
}
exports.AbortMove = AbortMove;
exports.default = AbortMove;
//# sourceMappingURL=AbortMove.js.map