// ── Components ────────────────────────────────────────────────────────────────
export {
  Document,
  Page,
  View,
  Text,
  Image,
  Link,
  Note,
  Canvas,
  // SVG
  Svg,
  Line,
  Polyline,
  Polygon,
  Path,
  Rect,
  Circle,
  Ellipse,
  Tspan,
  G,
  Stop,
  Defs,
  ClipPath,
  LinearGradient,
  RadialGradient,
} from "./components";

export type {
  WebDocumentProps,
  WebPageProps,
  WebViewProps,
  WebTextProps,
  WebImageProps,
  WebLinkProps,
  WithClassName,
} from "./components/primitives";

// ── Styles ────────────────────────────────────────────────────────────────────
export { classNameToStyle, unknownClasses } from "./styles/parser";
export { colors, spacing, fontSizes, fontWeights } from "./styles/tokens";

// ── Utilities ─────────────────────────────────────────────────────────────────
export { cn, mergeStyles } from "./utils";

// ── Hooks ─────────────────────────────────────────────────────────────────────
export { useStyle } from "./hooks/useStyle";

// ── Re-export renderer utilities ─────────────────────────────────────────────
export {
  StyleSheet,
  Font,
  PDFViewer,
  PDFDownloadLink,
  BlobProvider,
  renderToBuffer,
  renderToStream,
  renderToString,
  usePDF,
} from "@react-pdf/renderer";
