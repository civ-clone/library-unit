"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetWithKing = void 0;
const MeetWithLeader_1 = require("@civ-clone/base-unit-action-meet-with-leader/MeetWithLeader");
/**
 * @deprecated Use `MeetWithLeader` (civ-clone/web-renderer#304). Kept for one release so that civ1-unit 0.1.22 and
 *  simple-ai-client 0.1.24, which range on this package, still find the class they import: the first builds it, the
 *  second checks `instanceof` against it.
 */
class MeetWithKing extends MeetWithLeader_1.default {
}
exports.MeetWithKing = MeetWithKing;
exports.default = MeetWithKing;
//# sourceMappingURL=MeetWithKing.js.map