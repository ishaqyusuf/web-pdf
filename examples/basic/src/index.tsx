/**
 * Basic web-pdf example.
 * Generates a simple one-page PDF and writes it to output/basic.pdf.
 */
import React from "react";
import { renderToBuffer } from "web-pdf";
import { mkdir, writeFile } from "node:fs/promises";
import { HelloWorld } from "./HelloWorld";

async function main() {
  const buffer = await renderToBuffer(<HelloWorld />);
  await mkdir("output", { recursive: true });
  await writeFile("output/basic.pdf", buffer);
  console.log("✓ output/basic.pdf written");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
