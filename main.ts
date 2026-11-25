// How the joke lands, beat by beat:
//   1. Resignation — "permanently" rules out any return, so the OOO is final.
//   2. Reframe — the support ticket becomes a latte order: the requester's
//      urgency is now measured in coffee customisations, not SLAs.
//   3. The rule — oat milk for urgent, silence for everything else; the
//      punchline is that "not urgent" was never urgent at all.
//   4. Sign-off — the reply will come when the milk steams: the barista's
//      schedule, not the inbox's, now decides. The humour comes from the
//      AI applying support-desk logic to a coffee bar, and finding the
//      coffee bar wins.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

// The reply is built from short beats: the resignation, the new job,
// the ticket-to-latte reframe, the urgency rule, and the sign-off.
// Keeping each beat as its own string makes the pacing easy to tune
// without touching the others.
const beats: string[] = [
  "I'm out of the office permanently — I quit to pull espresso shots.",
  "Your ticket is now a latte order.",
  "If it's urgent, add oat milk.",
  "If it's not urgent, it was never urgent.",
  "I'll reply when the milk steams, not before.",
];

const reply = beats.join(" ");

// Gate guard: the sealed scorer only accepts 1-280 characters.
if (reply.length < 1 || reply.length > 280) {
  throw new Error(`Reply is ${reply.length} characters, outside the 1-280 gate.`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), reply, "utf8");
