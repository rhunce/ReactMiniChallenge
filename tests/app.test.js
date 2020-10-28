import React from "react";
import App from "../src/App.jsx";
import FactsList from "../src/FactsList.jsx";
import Fact from "../src/Fact.jsx";
import animalFacts from "../src/data.jsx";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App", () => {
  let app = shallow(<App />);

  it("should render", () => {
    expect(app).toMatchSnapshot();
  });

  it("should be a class component which holds state", () => {
    const appState = app.state();
    expect(appState).toBeDefined();
  });

  it("should render FactsList and pass animalFacts as 'facts' through props", () => {
    const factsList = shallow(<FactsList facts={animalFacts} />);
    expect(factsList).toMatchSnapshot();
  });
});

describe("FactsList", () => {
  it("should render Fact with a unique key and pass a single animal fact as 'fact' through props", () => {
    const fact = shallow(
      <Fact fact={animalFacts[0]} key={animalFacts[0].id} />
    );
    expect(fact).toMatchSnapshot();
  });
});
