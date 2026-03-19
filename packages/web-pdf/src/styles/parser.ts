import type { Style } from "@react-pdf/renderer";
import {
  borderRadius,
  colors,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  spacing,
} from "./tokens";

type ReactPDFStyle = Style;

/** Parse a single utility class into a React-PDF style object (or null if unknown). */
function parseClass(cls: string): ReactPDFStyle | null {
  // ── Flex layout ─────────────────────────────────────────────────────
  if (cls === "flex") return { display: "flex" };
  if (cls === "flex-row") return { flexDirection: "row" };
  if (cls === "flex-col") return { flexDirection: "column" };
  if (cls === "flex-row-reverse") return { flexDirection: "row-reverse" };
  if (cls === "flex-col-reverse") return { flexDirection: "column-reverse" };
  if (cls === "flex-wrap") return { flexWrap: "wrap" };
  if (cls === "flex-nowrap") return { flexWrap: "nowrap" };
  if (cls === "flex-wrap-reverse") return { flexWrap: "wrap-reverse" };
  if (cls === "flex-1") return { flex: 1 };
  if (cls === "flex-auto") return { flex: 1, flexBasis: "auto" };
  if (cls === "flex-none") return { flex: 0 };
  if (cls === "flex-shrink" || cls === "shrink") return { flexShrink: 1 };
  if (cls === "flex-shrink-0" || cls === "shrink-0") return { flexShrink: 0 };
  if (cls === "flex-grow" || cls === "grow") return { flexGrow: 1 };
  if (cls === "flex-grow-0" || cls === "grow-0") return { flexGrow: 0 };

  // ── Justify content ─────────────────────────────────────────────────
  if (cls === "justify-start") return { justifyContent: "flex-start" };
  if (cls === "justify-end") return { justifyContent: "flex-end" };
  if (cls === "justify-center") return { justifyContent: "center" };
  if (cls === "justify-between") return { justifyContent: "space-between" };
  if (cls === "justify-around") return { justifyContent: "space-around" };
  if (cls === "justify-evenly") return { justifyContent: "space-evenly" };

  // ── Align items ──────────────────────────────────────────────────────
  if (cls === "items-start") return { alignItems: "flex-start" };
  if (cls === "items-end") return { alignItems: "flex-end" };
  if (cls === "items-center") return { alignItems: "center" };
  if (cls === "items-baseline") return { alignItems: "baseline" };
  if (cls === "items-stretch") return { alignItems: "stretch" };

  // ── Align self ───────────────────────────────────────────────────────
  if (cls === "self-auto") return { alignSelf: "auto" };
  if (cls === "self-start") return { alignSelf: "flex-start" };
  if (cls === "self-end") return { alignSelf: "flex-end" };
  if (cls === "self-center") return { alignSelf: "center" };
  if (cls === "self-stretch") return { alignSelf: "stretch" };

  // ── Position ─────────────────────────────────────────────────────────
  if (cls === "relative") return { position: "relative" };
  if (cls === "absolute") return { position: "absolute" };

  // ── Overflow ─────────────────────────────────────────────────────────
  if (cls === "overflow-hidden") return { overflow: "hidden" };

  // ── Typography helpers ───────────────────────────────────────────────
  if (cls === "italic") return { fontStyle: "italic" };
  if (cls === "not-italic") return { fontStyle: "normal" };
  if (cls === "underline") return { textDecoration: "underline" };
  if (cls === "line-through") return { textDecoration: "line-through" };
  if (cls === "no-underline") return { textDecoration: "none" };
  if (cls === "uppercase") return { textTransform: "uppercase" };
  if (cls === "lowercase") return { textTransform: "lowercase" };
  if (cls === "capitalize") return { textTransform: "capitalize" };
  if (cls === "text-left") return { textAlign: "left" };
  if (cls === "text-center") return { textAlign: "center" };
  if (cls === "text-right") return { textAlign: "right" };
  if (cls === "text-justify") return { textAlign: "justify" };

  // ── Border style ─────────────────────────────────────────────────────
  if (cls === "border-solid") return { borderStyle: "solid" };
  if (cls === "border-dashed") return { borderStyle: "dashed" };
  if (cls === "border-dotted") return { borderStyle: "dotted" };

  // ── Dynamic classes (prefix-based) ───────────────────────────────────

  // flex-{n}
  const flexVal = matchPrefix(cls, "flex-");
  if (flexVal !== null && !isNaN(Number(flexVal)))
    return { flex: Number(flexVal) };

  // text-{size}
  const textSize = matchPrefix(cls, "text-");
  if (textSize && fontSizes[textSize]) return { fontSize: fontSizes[textSize] };

  // text-{color}
  if (textSize && colors[textSize]) return { color: colors[textSize] };

  // font-{weight}
  const fontWeight = matchPrefix(cls, "font-");
  if (fontWeight && fontWeights[fontWeight])
    return { fontWeight: fontWeights[fontWeight] };

  // font-{family} — passthrough string for custom fonts
  if (fontWeight && !fontWeights[fontWeight])
    return { fontFamily: fontWeight };

  // leading-{value}
  const leading = matchPrefix(cls, "leading-");
  if (leading && lineHeights[leading] !== undefined)
    return { lineHeight: lineHeights[leading] as number };

  // tracking-{value}
  const tracking = matchPrefix(cls, "tracking-");
  if (tracking && letterSpacings[tracking] !== undefined)
    return { letterSpacing: letterSpacings[tracking] };

  // bg-{color}
  const bgColor = matchPrefix(cls, "bg-");
  if (bgColor && colors[bgColor]) return { backgroundColor: colors[bgColor] };

  // opacity-{0-100}
  const opacity = matchPrefix(cls, "opacity-");
  if (opacity !== null && !isNaN(Number(opacity)))
    return { opacity: Number(opacity) / 100 };

  // rounded variants
  if (cls === "rounded") return { borderRadius: borderRadius.DEFAULT };
  if (cls === "rounded-none") return { borderRadius: 0 };
  if (cls === "rounded-full") return { borderRadius: borderRadius.full };
  const roundedKey = matchPrefix(cls, "rounded-");
  if (roundedKey && borderRadius[roundedKey] !== undefined)
    return { borderRadius: borderRadius[roundedKey] };

  // border (base)
  if (cls === "border") return { borderWidth: 1, borderStyle: "solid" };
  if (cls === "border-0") return { borderWidth: 0 };
  const borderWidth = matchPrefix(cls, "border-");
  if (borderWidth !== null && !isNaN(Number(borderWidth)))
    return { borderWidth: Number(borderWidth), borderStyle: "solid" };
  if (borderWidth && colors[borderWidth])
    return { borderColor: colors[borderWidth] };

  // border-{side}-{width}
  for (const [prefix, prop] of [
    ["border-t", "borderTopWidth"],
    ["border-r", "borderRightWidth"],
    ["border-b", "borderBottomWidth"],
    ["border-l", "borderLeftWidth"],
  ] as const) {
    const val = matchPrefix(cls, prefix + "-");
    if (val !== null && !isNaN(Number(val)))
      return { [prop]: Number(val), borderStyle: "solid" } as ReactPDFStyle;
    if (cls === prefix)
      return { [prop]: 1, borderStyle: "solid" } as ReactPDFStyle;
  }

  // Spacing — w / h / min-w / max-w / min-h / max-h
  const w = matchPrefix(cls, "w-");
  if (w !== null) return resolveSize("width", w);

  const h = matchPrefix(cls, "h-");
  if (h !== null) return resolveSize("height", h);

  const minW = matchPrefix(cls, "min-w-");
  if (minW !== null) return resolveSize("minWidth", minW);

  const maxW = matchPrefix(cls, "max-w-");
  if (maxW !== null) return resolveSize("maxWidth", maxW);

  const minH = matchPrefix(cls, "min-h-");
  if (minH !== null) return resolveSize("minHeight", minH);

  const maxH = matchPrefix(cls, "max-h-");
  if (maxH !== null) return resolveSize("maxHeight", maxH);

  // Margin / Padding
  for (const [abbr, props] of spacingMap) {
    const match = matchPrefixExact(cls, abbr + "-");
    if (match !== null) {
      const value = resolveSpacingValue(match);
      if (value !== null) return expandProps(props, value);
    }
  }

  // Inset (top / right / bottom / left)
  for (const [abbr, prop] of [
    ["top", "top"],
    ["right", "right"],
    ["bottom", "bottom"],
    ["left", "left"],
    ["inset", ["top", "right", "bottom", "left"]],
  ] as const) {
    const match = matchPrefixExact(cls, abbr + "-");
    if (match !== null) {
      const value = resolveSpacingValue(match);
      if (value !== null) {
        if (Array.isArray(prop)) return expandProps(prop, value);
        return { [prop]: value } as ReactPDFStyle;
      }
    }
  }

  // z-index
  const z = matchPrefix(cls, "z-");
  if (z !== null && !isNaN(Number(z))) return { zIndex: Number(z) };

  // gap
  const gap = matchPrefix(cls, "gap-");
  if (gap !== null) {
    const v = resolveSpacingValue(gap);
    if (v !== null) return { gap: v };
  }
  const gapX = matchPrefix(cls, "gap-x-");
  if (gapX !== null) {
    const v = resolveSpacingValue(gapX);
    if (v !== null) return { columnGap: v };
  }
  const gapY = matchPrefix(cls, "gap-y-");
  if (gapY !== null) {
    const v = resolveSpacingValue(gapY);
    if (v !== null) return { rowGap: v };
  }

  return null;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function matchPrefix(cls: string, prefix: string): string | null {
  if (cls.startsWith(prefix)) return cls.slice(prefix.length);
  return null;
}

function matchPrefixExact(cls: string, prefix: string): string | null {
  if (cls === prefix.slice(0, -1)) return "DEFAULT";
  if (cls.startsWith(prefix)) return cls.slice(prefix.length);
  return null;
}

function resolveSize(
  prop: string,
  value: string
): ReactPDFStyle | null {
  if (value === "full") return { [prop]: "100%" } as ReactPDFStyle;
  if (value === "screen")
    return { [prop]: prop.includes("width") ? "100vw" : "100vh" } as ReactPDFStyle;
  if (value === "auto") return { [prop]: "auto" } as ReactPDFStyle;
  if (value === "px") return { [prop]: 1 } as ReactPDFStyle;
  // fraction e.g. 1/2, 2/3
  const fraction = value.match(/^(\d+)\/(\d+)$/);
  if (fraction)
    return {
      [prop]: `${((Number(fraction[1]) / Number(fraction[2])) * 100).toFixed(4)}%`,
    } as ReactPDFStyle;
  // spacing scale
  if (spacing[value] !== undefined) return { [prop]: spacing[value] } as ReactPDFStyle;
  // numeric fallback
  if (!isNaN(Number(value))) return { [prop]: Number(value) } as ReactPDFStyle;
  return null;
}

function resolveSpacingValue(value: string): number | null {
  if (value === "px") return 1;
  if (value === "DEFAULT") return spacing["1"] ?? 4;
  if (spacing[value] !== undefined) return spacing[value];
  if (!isNaN(Number(value))) return Number(value) * 4;
  return null;
}

function expandProps(
  props: readonly string[],
  value: number
): ReactPDFStyle {
  return Object.fromEntries(props.map((p) => [p, value])) as ReactPDFStyle;
}

const spacingMap: [string, readonly string[]][] = [
  ["m", ["margin"]],
  ["mt", ["marginTop"]],
  ["mr", ["marginRight"]],
  ["mb", ["marginBottom"]],
  ["ml", ["marginLeft"]],
  ["mx", ["marginLeft", "marginRight"]],
  ["my", ["marginTop", "marginBottom"]],
  ["p", ["padding"]],
  ["pt", ["paddingTop"]],
  ["pr", ["paddingRight"]],
  ["pb", ["paddingBottom"]],
  ["pl", ["paddingLeft"]],
  ["px", ["paddingLeft", "paddingRight"]],
  ["py", ["paddingTop", "paddingBottom"]],
];

// ── Public API ────────────────────────────────────────────────────────────────

/**
 * Convert a className string into a merged React-PDF style object.
 * Unknown classes are silently skipped.
 */
export function classNameToStyle(className: string | undefined): ReactPDFStyle {
  if (!className) return {};
  const classes = className.trim().split(/\s+/);
  let merged: ReactPDFStyle = {};
  for (const cls of classes) {
    const style = parseClass(cls);
    if (style) merged = { ...merged, ...style };
  }
  return merged;
}

/** Return the list of classes that were NOT resolved (for diagnostics). */
export function unknownClasses(className: string): string[] {
  if (!className) return [];
  return className
    .trim()
    .split(/\s+/)
    .filter((cls) => parseClass(cls) === null);
}
