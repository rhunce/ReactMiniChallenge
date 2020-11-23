import React from "react";
// TO DO: Create an App class component which renders FactsList

// Use the div provided below to maintain existing CSS styling

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonClicked: false,
    };
  }

  handleButtonClick(e) {
    // when the favorite button is clicked
    // update the text of the button from "Click to Favorite" to "Favorited"
    // change the button background color from "yellow" to "pink"
    // Hint: use e.target.style.background to change the background color
    // Hint: use e.target.innerHTML to update the button text
  }

  render() {
    return (
      <div className="main">
        <FactsList />
      </div>
    );
  }
}

export default App;
