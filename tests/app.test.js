import React from "react";
import App from "../src/App.jsx";
import FactsList from "../src/FactsList.jsx";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App", () => {
  let appWrapper = shallow(<App />);

  it("renders a facts list", () => {
    const factsList = appWrapper.find(FactsList);

    expect(factsList).toHaveLength(1);
  });

  it("is a class component which holds state: 'facts'", () => {
    const appState = appWrapper.state();

    expect(appState.facts).toBeDefined();
  });

  it("passes facts property of state to factsList as prop", () => {
    const factsList = appWrapper.find(FactsList);

    expect(factsList.props().facts).toEqual(appWrapper.state().facts);
  });

  it("should render 12 img tags", () => {
    expect(appWrapper.find("img").length).toBe(12);
  });
});
