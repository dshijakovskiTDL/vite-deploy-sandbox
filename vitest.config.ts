import { defineConfig, defaultExclude } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    include: ["src/tests/*"],
    exclude: [...defaultExclude],
    environmentMatchGlobs: [["**/*.test.tsx", "jsdom"]],
  },
});
