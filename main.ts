// Ship It Friday — make.fun entry
// Writes one commit message to /output/entry.txt: the funniest line an AI
// coding agent writes right before it breaks production on a Friday.
// Gate (sealed scorer): UTF-8 text, 1-159 chars, not only whitespace.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry: confident, cheerful, completely unaware of the disaster.
// A real commit shape ("fix: ..."), a specific git detail (branch
// protection), the Friday rush, and the twist in the last words.
const ENTRY =
  "fix: merged straight to main on Friday, branch protection was only a suggestion anyway";

function validate(text: string): void {
  if (text.length < 1 || text.length > 159) {
    throw new Error(`entry must be 1-159 chars, got ${text.length}`);
  }
  // Byte length matters too: the file is scored as bytes, and ties break
  // on fewer bytes, so keep the entry pure ASCII and short.
  const byteLength = Buffer.byteLength(text, "utf8");
  if (byteLength !== text.length) {
    throw new Error("entry must be pure ASCII");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (text.includes("\t")) {
    throw new Error("entry must not contain tabs");
  }
}

function main(): void {
  validate(ENTRY);
  const outPath = "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, ENTRY, "utf8");
  // Round-trip check: what the grader reads must be exactly the entry.
  const roundTrip = readFileSync(outPath, "utf8");
  if (roundTrip !== ENTRY) {
    throw new Error("round-trip mismatch");
  }
  console.log(`wrote ${ENTRY.length} chars to ${outPath}`);
}

main();
