import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, { shallow } from "enzyme";
import React from "react";

import App from "./App";

Enzyme.configure({
  adapter: new Adapter(),
});

test("renders without error", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
});

test("renders button", () => {});

test("renders counter display", () => {});

test("counter starts at 0", () => {});

test("clicking on button increments counter display", () => {});
