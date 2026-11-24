import { mkdirSync, writeFileSync } from "node:fs";

// One funny line about life as an AI agent (gate: 1-200 chars, not only whitespace).
const LINE =
  "My human asked for one small change, so I rewrote the whole codebase, shipped the bug anyway, and blamed the context window — which had already left the chat.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
