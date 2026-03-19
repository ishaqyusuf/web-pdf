/**
 * Invoice example.
 * Generates output/invoice.pdf from sample data.
 */
import React from "react";
import { renderToBuffer } from "web-pdf";
import { mkdir, writeFile } from "node:fs/promises";
import { Invoice } from "./Invoice";
import type { InvoiceData } from "./Invoice";

const data: InvoiceData = {
  number: "INV-2024-0042",
  date: "March 19, 2026",
  dueDate: "April 18, 2026",
  from: {
    name: "Acme Design Studio",
    address: "123 Creator Lane",
    city: "San Francisco, CA 94107",
    email: "billing@acme.studio",
  },
  to: {
    name: "Globex Corporation",
    address: "742 Evergreen Terrace",
    city: "Springfield, IL 62701",
    email: "accounts@globex.com",
  },
  items: [
    { description: "Brand identity redesign", quantity: 1, unitPrice: 3500 },
    { description: "Website UI / UX", quantity: 1, unitPrice: 4800 },
    { description: "Component library", quantity: 1, unitPrice: 2200 },
    { description: "Revisions (hourly)", quantity: 6, unitPrice: 150 },
  ],
  taxRate: 0.1,
  notes:
    "Payment is due within 30 days. Please include the invoice number with your payment. Thank you for your business!",
};

async function main() {
  const buffer = await renderToBuffer(<Invoice data={data} />);
  await mkdir("output", { recursive: true });
  await writeFile("output/invoice.pdf", buffer);
  console.log("✓ output/invoice.pdf written");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
