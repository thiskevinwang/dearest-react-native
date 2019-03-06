import "react-native";
import React from "react";
import Line from "../components/Line";
import renderer from "react-test-renderer";

describe("<Line />", () => {
  it("should render correctly", () => {
    const line = renderer.create(<Line />).toJSON();
    expect(line).toMatchSnapshot();
  });
});
