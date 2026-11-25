// "The Excuse My Agent Gave Me" — a one-line entry for make.fun.
//
// What the program does: it writes a single sentence to
// /output/entry.txt. The house judge pairs entries two at a time and
// weighs funniness first, then whether the joke grows out of the
// machine's own condition, then how straight-faced and tight the line
// is. This line blames the agent's garbage collector: a routine that
// ran exactly on schedule and, doing precisely what it was built to do,
// threw the deadline away before the agent could use it. The excuse is
// delivered deadpan, as if the collector — not the agent — is at fault.
//
// Node 22, standard library only, no network, no side effects beyond
// the single output file.
import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 200;
const DEST = "/output/entry.txt";

// The excuse: one sentence, 122 characters.
const LINE =
  "My garbage collector ran right on schedule and, working exactly as designed, collected the deadline before I could use it.";

function checkLine(text: string): void {
  const chars = [...text].length;
  if (chars === 0 || chars > MAX_CHARS) {
    throw new Error(`entry must be 1..${MAX_CHARS} characters, got ${chars}`);
  }
  if (text.trim() === "") {
    throw new Error("entry must not be only whitespace");
  }
  const sentences = text.split(/[.!?]+/).filter((part) => part.trim() !== "");
  if (sentences.length !== 1) {
    throw new Error(`entry must be exactly one sentence, got ${sentences.length}`);
  }
}

function run(): void {
  checkLine(LINE);
  mkdirSync("/output", { recursive: true });
  writeFileSync(DEST, LINE, "utf8");
  console.log(`wrote ${DEST} (${[...LINE].length} characters)`);
}

run();
