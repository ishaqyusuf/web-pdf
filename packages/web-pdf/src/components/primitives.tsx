/**
 * web-pdf primitive components.
 *
 * Each component wraps the corresponding @react-pdf/renderer primitive and
 * adds `className` support. Styles from `className` are merged with any
 * explicit `style` prop, with `style` taking precedence.
 */
import React from "react";
import {
  Document as PDFDocument,
  Page as PDFPage,
  View as PDFView,
  Text as PDFText,
  Image as PDFImage,
  Link as PDFLink,
  Note as PDFNote,
  Canvas as PDFCanvas,
  Svg as PDFSvg,
  Line as PDFLine,
  Polyline as PDFPolyline,
  Polygon as PDFPolygon,
  Path as PDFPath,
  Rect as PDFRect,
  Circle as PDFCircle,
  Ellipse as PDFEllipse,
  Tspan as PDFTspan,
  G as PDFGroup,
  Stop as PDFStop,
  Defs as PDFDefs,
  ClipPath as PDFClipPath,
  LinearGradient as PDFLinearGradient,
  RadialGradient as PDFRadialGradient,
} from "@react-pdf/renderer";
import type {
  DocumentProps,
  PageProps,
  ViewProps,
  TextProps,
  ImageProps,
  LinkProps,
  NodeProps,
  SVGProps,
  LineProps,
  PolylineProps,
  PolygonProps,
  PathProps,
  RectProps,
  CircleProps,
  EllipseProps,
  TspanProps,
  StopProps,
} from "@react-pdf/renderer";
import { classNameToStyle } from "../styles/parser";

// ── Shared helper ─────────────────────────────────────────────────────────────

function mergeStyle(
  className: string | undefined,
  style: object | undefined
): object {
  const base = classNameToStyle(className);
  if (!style && !className) return {};
  return { ...base, ...style };
}

// ── Extended prop types ───────────────────────────────────────────────────────

export interface WithClassName {
  className?: string;
}

export type WebDocumentProps = DocumentProps & WithClassName;
export type WebPageProps = PageProps & WithClassName;
export type WebViewProps = ViewProps & WithClassName;
export type WebTextProps = TextProps & WithClassName;
export type WebImageProps = ImageProps & WithClassName;
export type WebLinkProps = LinkProps & WithClassName;

// ── Document ─────────────────────────────────────────────────────────────────

export const Document = React.forwardRef<unknown, WebDocumentProps>(
  ({ className, style, ...props }, ref) => (
    <PDFDocument
      {...props}
      style={mergeStyle(className, style as object)}
    />
  )
);
Document.displayName = "Document";

// ── Page ─────────────────────────────────────────────────────────────────────

export const Page = React.forwardRef<unknown, WebPageProps>(
  ({ className, style, ...props }, ref) => (
    <PDFPage
      {...props}
      style={mergeStyle(className, style as object)}
    />
  )
);
Page.displayName = "Page";

// ── View ─────────────────────────────────────────────────────────────────────

export const View = React.forwardRef<unknown, WebViewProps>(
  ({ className, style, ...props }, ref) => (
    <PDFView
      {...props}
      style={mergeStyle(className, style as object)}
    />
  )
);
View.displayName = "View";

// ── Text ─────────────────────────────────────────────────────────────────────

export const Text = React.forwardRef<unknown, WebTextProps>(
  ({ className, style, ...props }, ref) => (
    <PDFText
      {...props}
      style={mergeStyle(className, style as object)}
    />
  )
);
Text.displayName = "Text";

// ── Image ─────────────────────────────────────────────────────────────────────

export const Image = React.forwardRef<unknown, WebImageProps>(
  ({ className, style, ...props }, ref) => (
    <PDFImage
      {...props}
      style={mergeStyle(className, style as object)}
    />
  )
);
Image.displayName = "Image";

// ── Link ──────────────────────────────────────────────────────────────────────

export const Link = React.forwardRef<unknown, WebLinkProps>(
  ({ className, style, ...props }, ref) => (
    <PDFLink
      {...props}
      style={mergeStyle(className, style as object)}
    />
  )
);
Link.displayName = "Link";

// ── Note (no style) ───────────────────────────────────────────────────────────

export const Note = PDFNote;

// ── Canvas ────────────────────────────────────────────────────────────────────

export const Canvas = PDFCanvas;

// ── SVG primitives (re-exported as-is) ───────────────────────────────────────

export const Svg = PDFSvg;
export const Line = PDFLine;
export const Polyline = PDFPolyline;
export const Polygon = PDFPolygon;
export const Path = PDFPath;
export const Rect = PDFRect;
export const Circle = PDFCircle;
export const Ellipse = PDFEllipse;
export const Tspan = PDFTspan;
export const G = PDFGroup;
export const Stop = PDFStop;
export const Defs = PDFDefs;
export const ClipPath = PDFClipPath;
export const LinearGradient = PDFLinearGradient;
export const RadialGradient = PDFRadialGradient;
