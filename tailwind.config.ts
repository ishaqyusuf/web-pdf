import type { Config } from "tailwindcss";

/**
 * This config exists solely to power Tailwind CSS IntelliSense autocomplete
 * in VS Code. No CSS is generated — web-pdf resolves className at render time.
 *
 * Install the extension: https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
 */
const config: Config = {
  content: [
    "./packages/**/*.{ts,tsx}",
    "./examples/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
