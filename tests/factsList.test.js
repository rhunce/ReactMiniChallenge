import React from "react";
import App from "../src/App.jsx";
import FactsList from "../src/FactsList.jsx";
import Fact from "../src/Fact.jsx";
import animalFacts from "../src/data.jsx";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("FactsList", () => {
  let factsListWrapper = shallow(<FactsList facts={animalFacts} />);

  it("renders 12 facts", () => {
    const fact = factsListWrapper.find(Fact);

    expect(fact).toHaveLength(12);
  });
});
