import { expect, test } from "vitest";

const sum = (a: number, b: number) => a + b;

test("Correctly sum 3 and 5", () => {
  expect(sum(3, 5)).toBe(8);
});
