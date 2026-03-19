import { useMemo } from "react";
import type { Style } from "@react-pdf/renderer";
import { classNameToStyle } from "../styles/parser";

/**
 * Memoized hook that converts a className string to a React-PDF style object.
 *
 * @example
 * const style = useStyle("flex flex-col p-4 bg-white")
 */
export function useStyle(className: string | undefined): Style {
  return useMemo(() => classNameToStyle(className), [className]);
}
