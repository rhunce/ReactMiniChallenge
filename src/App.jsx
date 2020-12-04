import React from "react";
import animalFacts from "./data.jsx";
import FactsList from "./FactsList.jsx";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      facts: animalFacts,
      favorite: "",
    };

    this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
  }

  handleFavoriteClick(e) {
    // console.log(e.target.value);
    this.setState({
      favorite: e.target.value,
    });
  }

  render() {
    return (
      <div className="main">
        <h1 className="heading">Welcome to Animal Facts!</h1>
        <h2 className="fave">My Favorite Animal: {this.state.favorite}</h2>
        <FactsList
          facts={this.state.facts}
          handleFavoriteClick={this.handleFavoriteClick}
        />
      </div>
    );
  }
}

export default App;
