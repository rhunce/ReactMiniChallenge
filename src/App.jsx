import React from "react";
// TO DO: Create an App class component which renders FactsList

// Use the div provided below to maintain existing CSS styling

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // TODO: when a button in a Fact component is clicked, the button text should change from "Not Clicked" to "Clicked"
  // Hint: use e.target.innerHTML to access the button text
  handleButtonClick(e) {}

  render() {
    return (
      <div className="main">
        <FactsList />
      </div>
    );
  }
}

export default App;
