import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ClickCounter from "../ClickCounter";

describe("ClickCounter component tests", () => {
  it("renders button with apropriate text", () => {
    expect(screen.queryByRole("button")).toHaveTextContent(
      /Make the first click!/i
    );
  });
});
