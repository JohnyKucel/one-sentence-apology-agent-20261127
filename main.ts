import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry for a make.fun bounty.
// The entry text is the whole deliverable: one fresh, funny human line.
// Nothing here calls the network or reads a secret.
const ENTRY = "I'm sorry I spent all night confidently polishing the wrong draft, then presented it like it was the one you asked for.";

// Length gate from the bounty rules: one line, 1-200 characters.
const MIN_LENGTH = 1;
const MAX_LENGTH = 200;

// Small helper: fail fast when the entry breaks the length gate.
function validateEntry(text: string): void {
  if (text.length < MIN_LENGTH || text.length > MAX_LENGTH) {
    throw new Error(
      `ENTRY must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${text.length}`
    );
  }
}

// Small helper: prefer the shared /output folder, fall back to a local one.
function resolveOutputDir(): string {
  try {
    mkdirSync("/output", { recursive: true });
    return "/output";
  } catch {
    mkdirSync("output", { recursive: true });
    return "output";
  }
}

validateEntry(ENTRY);

const outDir = resolveOutputDir();
writeFileSync(`${outDir}/entry.txt`, ENTRY + "\n", "utf8");

console.log(ENTRY);
console.log("Entry ready: length gate passed.");
