import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import ClickCounter from "../ClickCounter";
import Hello from "../Hello";

describe("App component tests", () => {
  it("renders App component", () => {
    render(<App />);
    // screen.debug();
  });

  it("should contains Hello and ClickCounter", () => {
    render(<Hello />);
    render(<ClickCounter />);
  });

  it("it match  snapshot", () => {
    //I created snapshot just for curiosity.
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
    // screen.debug();
  });

  it("renders text in App component", () => {
    const { getByText } = render(<App />);
    const text = getByText(
      /Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum./i
    );
    expect(text).toBeInTheDocument();
  });
});
