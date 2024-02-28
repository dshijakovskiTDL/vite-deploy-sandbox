import { describe, test } from "vitest";

import { render } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  test("App render sanity", () => {
    render(<App />);
  });
});
