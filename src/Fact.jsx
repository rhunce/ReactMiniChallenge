import React from "react";
// TO DO: Create a Fact Functional component which returns a div in the format below

// NOTE: In order to maintain CSS styling, do not alter the existing tags or their classNames
const Fact = (props) => {
  return (
    <div className="factCard">
      <h1>{props.fact.animal}</h1>
      {/* TODO: Attach an onClick event to the button */}
      <button value={props.fact.animal} onClick={props.handleFavoriteClick}>
        Click to favorite
      </button>
      <img src={props.fact.image} width="600" height="400" />
      <h3>{props.fact.fact}</h3>
    </div>
  );
};

export default Fact;