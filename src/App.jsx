import React from "react";
import FactsList from "./FactsList.jsx";
import animalFacts from "./data.jsx";
// TO DO: Create an App class component which renders FactsList

// Before jumping into coding, check out the README for some reccomendations on the order to complete the challenge in and helpful hints
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      facts: animalFacts,
      favorite: "",
    };
  }

  // TODO: when the favorite button is clicked in a Fact component, the state should get updated with the name of the animal that was favorited
  handleFavoriteClick(e) {
    console.log(e.target.value);
    this.setState({
      favorite: e.target.value
    })
  }

  // NOTE: In order to maintain CSS styling, do not alter the existing tags or their classNames
  render() {
    return (
      <div className="main">
        <h1 className="heading">Welcome to Animal Facts!</h1>
        <h2 className="fave">My Favorite Animal: {this.state.favorite}</h2>
        <FactsList facts={this.state.facts} handleFavoriteClick={this.handleFavoriteClick.bind(this)}/>
      </div>
    );
  }
}

export default App;
