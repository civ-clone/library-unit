import MeetWithLeader from '@civ-clone/base-unit-action-meet-with-leader/MeetWithLeader';

/**
 * @deprecated Use `MeetWithLeader` (civ-clone/web-renderer#304). Kept for one release so that civ1-unit 0.1.22 and
 *  simple-ai-client 0.1.24, which range on this package, still find the class they import: the first builds it, the
 *  second checks `instanceof` against it.
 */
export class MeetWithKing extends MeetWithLeader {}

export default MeetWithKing;
