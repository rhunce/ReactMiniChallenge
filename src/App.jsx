import React from "react";
// TO DO: Create an App class component which renders FactsList

// Before jumping into coding, check out the README for some reccomendations on the order to complete the challenge in and helpful hints
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      facts: "",
      favorite: "",
    };
  }

  // TODO: when the favorite button is clicked in a Fact component, the state should get updated with the name of the animal that was favorited
  handleFavoriteClick(e) {}

  // NOTE: In order to maintain CSS styling, do not alter the existing tags or their classNames
  render() {
    return (
      <div className="main">
        <h1 className="heading">Welcome to Animal Facts!</h1>
        <h2 className="fave">My Favorite Animal: {}</h2>
        <FactsList />
      </div>
    );
  }
}

export default App;
