import type { Style } from "@react-pdf/renderer";
import { classNameToStyle } from "./styles/parser";

type ClassValue = string | undefined | null | false | ClassValue[];

/**
 * Merge class strings (like `clsx`) and resolve to a React-PDF style object.
 *
 * @example
 * const style = cn("flex flex-col p-4", isActive && "bg-blue-500")
 */
export function cn(...inputs: ClassValue[]): Style {
  const classes = flattenClasses(inputs);
  return classNameToStyle(classes.join(" "));
}

function flattenClasses(inputs: ClassValue[]): string[] {
  const result: string[] = [];
  for (const input of inputs) {
    if (!input) continue;
    if (Array.isArray(input)) {
      result.push(...flattenClasses(input));
    } else if (typeof input === "string") {
      result.push(input);
    }
  }
  return result;
}

/**
 * Merge multiple style objects together (last wins).
 */
export function mergeStyles(...styles: (Style | undefined)[]): Style {
  return Object.assign({}, ...styles.filter(Boolean));
}
