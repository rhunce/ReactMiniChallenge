import React from "react";
import App from "../src/App.jsx";
import FactsList from "../src/FactsList.jsx";
import Fact from "../src/Fact.jsx";
import animalFacts from "../src/data.jsx";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App", () => {
  let appWrapper = shallow(<App />);

  it("is a class component which holds state: 'facts' & 'favorite'", () => {
    const appState = appWrapper.state();

    expect(appState.facts).toBe(animalFacts);
    expect(appState.favorite).toBeDefined();
  });

  it("renders the FactsList component", () => {
    const factsList = appWrapper.find(FactsList);

    expect(factsList).toHaveLength(1);
  });

  it("passes facts and to factsList through props", () => {
    const factsList = appWrapper.find(FactsList);

    expect(factsList.props().facts).toEqual(appWrapper.state().facts);
  });

  beforeEach(() => {
    const event = {
      target: { value: "Corgi" },
    };
    appWrapper.instance().handleFavoriteClick(event);
  });

  it("updates the favorite state when a favorite animal is selected", () => {
    expect(appWrapper.state().favorite).toEqual("Corgi");
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
  const mockFavorite = jest.fn();
  const props = { fact: animalFacts[0], handleFavoriteClick: mockFavorite };
  const fact = shallow(<Fact {...props} />);

  beforeEach(() => {
    fact.find("button").simulate("click");
  });

  it("calls the handleFavoriteClick function when the 'Click to favorite' button is clicked", () => {
    expect(mockFavorite).toHaveBeenCalled();
  });
});
