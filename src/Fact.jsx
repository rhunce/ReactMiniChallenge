import React from "react";

const Fact = ({ fact, handleCardClick }) => {
  return (
    <div className="factCard">
      <h1>{fact.animal}</h1>
      <button onClick={(e) => handleCardClick(e)}>{"Click to Favorite"}</button>
      <img src={fact.image} width="600" height="400" />
      <h3>{fact.fact}</h3>
    </div>
  );
};

export default Fact;
