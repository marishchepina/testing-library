import React from "react";
import { render } from "@testing-library/react";
import Hello from "../Hello";

// describe("<Hello />", () => {
//     it("should render text from props", () => {
//       const name = "test name";
//       const wrapper = shallow(<Hello name={name} />);

//       expect(wrapper.text()).toContain(name);
//     });

//     it("should render default text 'User'", () => {
//       const wrapper = shallow(<Hello />);

//       expect(wrapper.text()).toContain("User");
//     });
//    });

describe("<Hello />", () => {
  it("render hello", () => {
    render(<Hello />);
  });
});
