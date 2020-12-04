import React from "react";

const Fact = ({ fact, handleFavoriteClick }) => {
  return (
    <div className="factCard">
      <h1>{fact.animal}</h1>
      <button value={fact.animal} onClick={(e) => handleFavoriteClick(e)}>
        Click to favorite
      </button>
      <img src={fact.image} width="600" height="400" />
      <h3>{fact.fact}</h3>
    </div>
  );
};

export default Fact;
