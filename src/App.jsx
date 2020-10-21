// import React from "react";
import animalFacts from "./data.jsx";
import FactsList from "./FactsList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      facts: animalFacts,
    };
  }
  render() {
    return (
      <div className="main">
        <FactsList facts={this.state.facts} />
      </div>
    );
  }
}

export default App;
