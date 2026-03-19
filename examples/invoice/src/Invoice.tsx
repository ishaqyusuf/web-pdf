import React from "react";
import { Document, Page, View, Text } from "web-pdf";

// ── Data types ────────────────────────────────────────────────────────────────

export interface Party {
  name: string;
  address: string;
  city: string;
  email: string;
}

export interface LineItem {
  description: string;
  quantity: number;
  unitPrice: number;
}

export interface InvoiceData {
  number: string;
  date: string;
  dueDate: string;
  from: Party;
  to: Party;
  items: LineItem[];
  taxRate: number;
  notes?: string;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

const fmt = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD" });

// ── Sub-components ────────────────────────────────────────────────────────────

function PartyBlock({ label, party }: { label: string; party: Party }) {
  return (
    <View className="flex-1">
      <Text className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-2">
        {label}
      </Text>
      <Text className="text-sm font-semibold text-gray-900">{party.name}</Text>
      <Text className="text-xs text-gray-500 mt-1">{party.address}</Text>
      <Text className="text-xs text-gray-500">{party.city}</Text>
      <Text className="text-xs text-gray-500 mt-1">{party.email}</Text>
    </View>
  );
}

function TableHeader() {
  return (
    <View className="flex flex-row bg-gray-900 px-4 py-2 rounded-sm">
      <Text className="flex-1 text-xs font-semibold text-white">
        Description
      </Text>
      <Text className="w-16 text-xs font-semibold text-white text-right">
        Qty
      </Text>
      <Text className="w-24 text-xs font-semibold text-white text-right">
        Unit Price
      </Text>
      <Text className="w-24 text-xs font-semibold text-white text-right">
        Amount
      </Text>
    </View>
  );
}

function TableRow({
  item,
  even,
}: {
  item: LineItem;
  even: boolean;
}) {
  const subtotal = item.quantity * item.unitPrice;
  return (
    <View
      className={`flex flex-row px-4 py-2 ${even ? "bg-gray-50" : "bg-white"}`}
    >
      <Text className="flex-1 text-xs text-gray-700">{item.description}</Text>
      <Text className="w-16 text-xs text-gray-700 text-right">
        {item.quantity}
      </Text>
      <Text className="w-24 text-xs text-gray-700 text-right">
        {fmt(item.unitPrice)}
      </Text>
      <Text className="w-24 text-xs text-gray-800 font-medium text-right">
        {fmt(subtotal)}
      </Text>
    </View>
  );
}

function SummaryRow({
  label,
  value,
  bold,
  large,
  bg,
}: {
  label: string;
  value: string;
  bold?: boolean;
  large?: boolean;
  bg?: string;
}) {
  const rowClass = `flex flex-row justify-between items-center px-4 py-2 ${bg ?? ""}`;
  const labelClass = `text-xs ${bold ? "font-semibold text-gray-800" : "text-gray-500"}`;
  const valueClass = `${large ? "text-sm" : "text-xs"} ${bold ? "font-bold text-gray-900" : "text-gray-700"}`;
  return (
    <View className={rowClass}>
      <Text className={labelClass}>{label}</Text>
      <Text className={valueClass}>{value}</Text>
    </View>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export function Invoice({ data }: { data: InvoiceData }) {
  const subtotal = data.items.reduce(
    (sum, item) => sum + item.quantity * item.unitPrice,
    0
  );
  const tax = subtotal * data.taxRate;
  const total = subtotal + tax;

  return (
    <Document>
      <Page size="A4" className="p-12 bg-white">
        {/* Header ─────────────────────────────────────────────────── */}
        <View className="flex flex-row justify-between items-start mb-10">
          <View>
            <Text className="text-3xl font-black text-gray-900">INVOICE</Text>
            <Text className="text-sm text-gray-500 mt-1">{data.number}</Text>
          </View>
          <View className="items-end">
            <View className="flex flex-row gap-2 items-center">
              <Text className="text-xs text-gray-400">Date:</Text>
              <Text className="text-xs font-medium text-gray-700">
                {data.date}
              </Text>
            </View>
            <View className="flex flex-row gap-2 items-center mt-1">
              <Text className="text-xs text-gray-400">Due:</Text>
              <Text className="text-xs font-semibold text-red-600">
                {data.dueDate}
              </Text>
            </View>
          </View>
        </View>

        {/* Parties ────────────────────────────────────────────────── */}
        <View className="flex flex-row gap-8 mb-10 pb-8 border-b border-gray-200">
          <PartyBlock label="From" party={data.from} />
          <PartyBlock label="Bill To" party={data.to} />
        </View>

        {/* Line items ─────────────────────────────────────────────── */}
        <View className="mb-6">
          <TableHeader />
          {data.items.map((item, i) => (
            <TableRow key={i} item={item} even={i % 2 === 0} />
          ))}
          {/* Bottom border for table */}
          <View className="border-b border-gray-200 mt-1" />
        </View>

        {/* Summary ────────────────────────────────────────────────── */}
        <View className="flex flex-row justify-end mb-8">
          <View className="w-64 border border-gray-200 rounded-md overflow-hidden">
            <SummaryRow label="Subtotal" value={fmt(subtotal)} />
            <SummaryRow
              label={`Tax (${(data.taxRate * 100).toFixed(0)}%)`}
              value={fmt(tax)}
            />
            <SummaryRow
              label="Total Due"
              value={fmt(total)}
              bold
              large
              bg="bg-gray-900"
            />
          </View>
        </View>

        {/* Notes ──────────────────────────────────────────────────── */}
        {data.notes && (
          <View className="p-4 bg-gray-50 rounded-md border border-gray-200">
            <Text className="text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide">
              Notes
            </Text>
            <Text className="text-xs text-gray-600 leading-relaxed">
              {data.notes}
            </Text>
          </View>
        )}

        {/* Footer ─────────────────────────────────────────────────── */}
        <View className="absolute bottom-10 left-12 right-12 flex flex-row justify-between items-center border-t border-gray-100 pt-3">
          <Text className="text-xs text-gray-400">{data.from.name}</Text>
          <Text className="text-xs text-gray-400">
            Generated with web-pdf
          </Text>
        </View>
      </Page>
    </Document>
  );
}
