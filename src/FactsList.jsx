import React from "react";
import Fact from "./Fact.jsx";

const FactsList = ({ facts, handleCardClick, buttonClicked, buttonText }) => (
  <div className="factsList">
    {facts.map((item) => (
      <Fact fact={item} key={item.id} handleCardClick={handleCardClick} />
    ))}
  </div>
);

export default FactsList;
