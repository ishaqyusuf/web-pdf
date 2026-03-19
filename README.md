# web-pdf

> Developer-first PDF authoring framework built on [`@react-pdf/renderer`](https://react-pdf.org).

Write PDF documents with familiar React components and Tailwind-like `className` utilities. web-pdf handles style resolution, merging, and passes everything down to the battle-tested React-PDF renderer.

```tsx
import { Document, Page, View, Text } from "web-pdf";

function Invoice() {
  return (
    <Document>
      <Page size="A4" className="p-12 bg-white">
        <View className="flex flex-row justify-between items-center mb-8">
          <Text className="text-2xl font-bold text-gray-900">INVOICE</Text>
          <Text className="text-sm text-gray-400">#INV-001</Text>
        </View>
        <View className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <Text className="text-sm text-gray-700">Website redesign — $4,800.00</Text>
        </View>
      </Page>
    </Document>
  );
}
```

---

## Installation

```bash
bun add web-pdf @react-pdf/renderer react
```

> **Peer dependencies:** `@react-pdf/renderer ^3.0.0`, `react ^18.0.0`

---

## Core concepts

### `className` on every primitive

All components accept a `className` prop that resolves Tailwind-like utility classes to React-PDF styles. Explicit `style` props are merged on top (style wins).

```tsx
<View className="flex flex-col p-6 bg-white rounded-xl border border-gray-200" />
```

### `classNameToStyle(className)`

Convert a className string to a React-PDF style object directly.

```ts
import { classNameToStyle } from "web-pdf";

const style = classNameToStyle("flex flex-row p-4 bg-blue-500 text-white");
// → { display: "flex", flexDirection: "row", padding: 16, backgroundColor: "#3b82f6", color: "#ffffff" }
```

### `cn(...inputs)`

Merge conditional class strings into a style object — similar to `clsx` but returns a React-PDF `Style`.

```ts
import { cn } from "web-pdf";

const style = cn("flex flex-col p-4", isActive && "bg-blue-500 text-white");
```

### `useStyle(className)`

Memoised hook version of `classNameToStyle`.

```tsx
import { useStyle } from "web-pdf";

function MyComponent({ active }: { active: boolean }) {
  const style = useStyle(active ? "bg-green-500" : "bg-gray-200");
  return <View style={style} />;
}
```

---

## Supported utilities

### Layout

| Class | Style |
|---|---|
| `flex` | `display: flex` |
| `flex-row` / `flex-col` | `flexDirection` |
| `flex-wrap` / `flex-nowrap` | `flexWrap` |
| `flex-1` / `flex-{n}` | `flex` |
| `grow` / `grow-0` | `flexGrow` |
| `shrink` / `shrink-0` | `flexShrink` |
| `justify-start/end/center/between/around/evenly` | `justifyContent` |
| `items-start/end/center/baseline/stretch` | `alignItems` |
| `self-start/end/center/stretch` | `alignSelf` |
| `gap-{n}` / `gap-x-{n}` / `gap-y-{n}` | `gap` / `columnGap` / `rowGap` |

### Spacing (margin & padding)

Scale: `0`, `0.5`, `1` – `12`, `14`, `16`, `20`, `24`, `28`, `32`, `36`, `40`, `44`, `48`, `52`, `56`, `60`, `64`, `72`, `80`, `96`

| Prefix | Properties |
|---|---|
| `m-{n}` | `margin` |
| `mx-{n}` / `my-{n}` | horizontal / vertical margin |
| `mt/mr/mb/ml-{n}` | individual sides |
| `p-{n}`, `px/py/pt/pr/pb/pl-{n}` | padding (same pattern) |

### Sizing

```
w-{n}   h-{n}   min-w-{n}   max-w-{n}   min-h-{n}   max-h-{n}
w-full  h-full  w-auto      w-1/2       w-2/3       ...
```

### Typography

| Class | Style |
|---|---|
| `text-xs/sm/base/lg/xl/2xl/3xl/4xl/5xl` | `fontSize` (10–48) |
| `font-thin` … `font-black` | `fontWeight` (100–900) |
| `font-{family}` | `fontFamily` passthrough |
| `text-left/center/right/justify` | `textAlign` |
| `italic` / `not-italic` | `fontStyle` |
| `underline` / `line-through` / `no-underline` | `textDecoration` |
| `uppercase` / `lowercase` / `capitalize` | `textTransform` |
| `leading-none/tight/snug/normal/relaxed/loose` | `lineHeight` |
| `tracking-tighter/tight/normal/wide/wider/widest` | `letterSpacing` |
| `text-{color}` | `color` |

### Colors (text & background)

`text-{color}` → `color`, `bg-{color}` → `backgroundColor`.

Available palettes: `slate`, `gray`, `red`, `orange`, `yellow`, `green`, `blue`, `indigo`, `purple`, `pink`, plus `black`, `white`, `transparent`.

Each palette has shades 50–900.

### Borders

```
border              border-{n}
border-t/r/b/l      border-t/r/b/l-{n}
border-{color}
border-solid/dashed/dotted
rounded             rounded-sm/md/lg/xl/2xl/3xl/full
```

### Position & z-index

```
relative  absolute
top-{n}   right-{n}   bottom-{n}   left-{n}
inset-{n}
z-{n}
```

### Opacity

```
opacity-0   opacity-25   opacity-50   opacity-75   opacity-100
```

---

## Components

All components are drop-in replacements for `@react-pdf/renderer` primitives — same props, plus `className`.

| Component | Wraps |
|---|---|
| `Document` | `PDFDocument` |
| `Page` | `PDFPage` |
| `View` | `PDFView` |
| `Text` | `PDFText` |
| `Image` | `PDFImage` |
| `Link` | `PDFLink` |
| `Note`, `Canvas` | re-exported as-is |
| `Svg`, `Path`, `Rect`, `Circle`, … | SVG primitives re-exported as-is |

`StyleSheet`, `Font`, `PDFViewer`, `PDFDownloadLink`, `BlobProvider`, `renderToBuffer`, `renderToStream`, `usePDF` are all re-exported from `@react-pdf/renderer` for convenience.

---

## Examples

### Basic

```bash
cd examples/basic
bun install
bun run generate
# → output/basic.pdf
```

### Invoice

```bash
cd examples/invoice
bun install
bun run generate
# → output/invoice.pdf
```

---

## Workspace

```
packages/
  web-pdf/            ← core library
examples/
  basic/              ← hello-world PDF
  invoice/            ← full invoice example
brain/                ← project memory (architecture, tasks, decisions)
```

Build everything:

```bash
bun install
bun run build
```

---

## Architecture

web-pdf is a lightweight developer-experience layer on top of React-PDF:

```
className string
    │
    ▼
classNameToStyle()   ← utility parser (packages/web-pdf/src/styles/parser.ts)
    │
    ▼
React-PDF style object
    │
    ▼
@react-pdf/renderer  ← PDF rendering engine
    │
    ▼
PDF output
```

The parser is a pure TypeScript function — no build step, no config, no plugin required. Rust-backed parsing (for production performance) is on the roadmap.

---

## License

MIT
