import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Enzyme, { shallow } from "enzyme";
import React from "react";

import App from "./App";
import { Counter } from "./components/Counter";

Enzyme.configure({
  adapter: new Adapter(),
});

const setup = (element: React.ReactElement) => shallow(element);

const mockWindowAlert = jest.spyOn(window, "alert"); //overwrites window.alert behaviour, to avoid failures!
mockWindowAlert.mockImplementation(() => {}); // avoid window.alert failures!

const findComponentByTestAttr = (
  wrapper: Enzyme.ShallowWrapper | Enzyme.ReactWrapper,
  value: string
) => wrapper.find(`[data-test='${value}']`);

test("renders without error", () => {
  const wrapper = setup(<App />);
  const app = findComponentByTestAttr(wrapper, "component-app");
  expect(app.length).toBe(1);
});

test("renders button", () => {
  const wrapper = setup(<App />);
  const button = findComponentByTestAttr(wrapper, "increment-button");
  expect(button.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup(<App />);
  const counterDisplay = findComponentByTestAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setup(<Counter count={0} />);
  const count = findComponentByTestAttr(wrapper, "count").text();
  expect(count).toBe("0"); //text return a string, so we need to compare it against a string!
});

test("clicking on button increments, increases counter display", () => {
  // find the button
  const wrapper = setup(<App />);

  const buttonIncrement = findComponentByTestAttr(wrapper, "increment-button");

  // click it
  buttonIncrement.simulate("click");

  // find the display, and see if the display matches!

  const countDisplay = findComponentByTestAttr(wrapper, "counter-display").prop(
    "count"
  );

  expect(countDisplay).toBe(1);
});

test("clicking on button decrements, reduces counter display", () => {
  // find the button
  const wrapper = setup(<App />);
  const buttonDecrement = findComponentByTestAttr(wrapper, "decrement-button");

  // click it
  buttonDecrement.simulate("click");

  // find the display, and see if the display matches!

  const countDisplay = findComponentByTestAttr(wrapper, "counter-display").prop(
    "count"
  );

  expect(countDisplay).toBe(0); //counter cant go below zero!
});
