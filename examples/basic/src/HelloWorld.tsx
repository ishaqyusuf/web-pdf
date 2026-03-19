import React from "react";
import { Document, Page, View, Text } from "web-pdf";

export function HelloWorld() {
  return (
    <Document>
      <Page size="A4" className="p-12 bg-white">
        {/* Header */}
        <View className="flex flex-row justify-between items-center mb-8 pb-4 border-b border-gray-200">
          <Text className="text-2xl font-bold text-gray-900">web-pdf</Text>
          <Text className="text-sm text-gray-500">Hello, World!</Text>
        </View>

        {/* Body */}
        <View className="flex flex-col gap-4">
          <Text className="text-lg font-semibold text-gray-800">
            Getting Started
          </Text>
          <Text className="text-base leading-relaxed text-gray-600">
            This PDF was generated with web-pdf — a developer-first framework
            built on top of @react-pdf/renderer. You write familiar React
            components with Tailwind-like className utilities and they compile
            to production-quality PDFs.
          </Text>
          <Text className="text-base leading-relaxed text-gray-600">
            Style props like{" "}
            <Text className="font-semibold text-gray-800">
              flex, p-4, text-blue-600, rounded, border
            </Text>{" "}
            work exactly as you would expect, giving you a fast authoring loop
            without leaving React.
          </Text>
        </View>

        {/* Feature cards */}
        <View className="flex flex-row gap-4 mt-8">
          {[
            {
              title: "className support",
              desc: "Tailwind-like utilities resolved at render time.",
              color: "bg-blue-50",
              border: "border-blue-200",
              text: "text-blue-700",
            },
            {
              title: "Type-safe",
              desc: "All components and utilities are fully typed.",
              color: "bg-green-50",
              border: "border-green-200",
              text: "text-green-700",
            },
            {
              title: "React-PDF power",
              desc: "Full access to the underlying renderer.",
              color: "bg-purple-50",
              border: "border-purple-200",
              text: "text-purple-700",
            },
          ].map((card) => (
            <View
              key={card.title}
              className={`flex-1 p-4 rounded-lg border ${card.color} ${card.border}`}
            >
              <Text className={`text-sm font-semibold mb-1 ${card.text}`}>
                {card.title}
              </Text>
              <Text className="text-xs text-gray-600 leading-relaxed">
                {card.desc}
              </Text>
            </View>
          ))}
        </View>

        {/* Footer */}
        <View className="absolute bottom-10 left-12 right-12 flex flex-row justify-between items-center border-t border-gray-100 pt-4">
          <Text className="text-xs text-gray-400">web-pdf</Text>
          <Text className="text-xs text-gray-400">Page 1</Text>
        </View>
      </Page>
    </Document>
  );
}
