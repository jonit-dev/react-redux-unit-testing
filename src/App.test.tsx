import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme from "enzyme";
import React from "react";

Enzyme.configure({
  adapter: new Adapter(),
});

test("renders without error", () => {});

test("renders button", () => {});

test("renders counter display", () => {});

test("counter starts at 0", () => {});

test("clicking on button increments counter display", () => {});
