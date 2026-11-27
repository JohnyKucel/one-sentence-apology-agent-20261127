import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "I'm sorry I spent all night confidently polishing the wrong draft, then presented it like it was the one you asked for.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`ENTRY must be 1-200 characters, got ${ENTRY.length}`);
}

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
} catch {
  mkdirSync("output", { recursive: true });
  writeFileSync("output/entry.txt", ENTRY + "\n", "utf8");
}

console.log(ENTRY);
