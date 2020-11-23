import React from "react";
import App from "../src/App.jsx";
import FactsList from "../src/FactsList.jsx";
import Fact from "../src/Fact.jsx";
import animalFacts from "../src/data.jsx";
import { shallow, mount } from "enzyme";
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

  it("passes facts to factsList through props", () => {
    const factsList = appWrapper.find(FactsList);

    expect(factsList.props().facts).toEqual(appWrapper.state().facts);
  });
});

describe("FactsList", () => {
  let factsListWrapper = shallow(<FactsList facts={animalFacts} />);

  it("renders 12 animal facts", () => {
    const fact = factsListWrapper.find(Fact);

    expect(fact).toHaveLength(12);
  });
});

describe("Fact", () => {
  it("recieves access to a animal, fact and image through props", () => {
    const animal = {
      id: 1,
      animal: "Sea Otter",
      fact:
        "Sea Otters hold hands while they're sleeping so they don't drift apart.",
      image: "https://jooinn.com/images/otter-11.jpg",
    };

    let factWrapper = shallow(<Fact fact={animal} />);

    console.log(factWrapper.props().children);

    expect(factWrapper.props().children).toBeDefined();
  });
});
