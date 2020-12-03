import React from "react";
import animalFacts from "./data.jsx";
import FactsList from "./FactsList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      facts: animalFacts,
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    e.target.innerHTML = "Clicked";
  }

  render() {
    return (
      <div className="main">
        <FactsList
          facts={this.state.facts}
          handleButtonClick={this.handleButtonClick}
        />
      </div>
    );
  }
}

export default App;
