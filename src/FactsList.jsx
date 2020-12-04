import React from "react";
import Fact from "./Fact.jsx";

const FactsList = ({ facts, handleFavoriteClick }) => (
  <div className="factsList">
    {facts.map((item) => (
      <Fact
        fact={item}
        key={item.id}
        handleFavoriteClick={handleFavoriteClick}
      />
    ))}
  </div>
);

export default FactsList;
