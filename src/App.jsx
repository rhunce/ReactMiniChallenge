import React from "react";
import animalFacts from "./data.jsx";
import FactsList from "./FactsList.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      facts: animalFacts,
      buttonClicked: false,
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    let currentState = this.state.buttonClicked;
    this.setState({
      buttonClicked: !currentState,
    });

    return this.state.buttonClicked
      ? ((e.target.style.background = "pink"),
        (e.target.innerHTML = "Favorited"))
      : ((e.target.style.background = "yellow"),
        (e.target.innerHTML = "Click to Favorite"));
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
