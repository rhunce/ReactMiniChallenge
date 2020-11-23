import React from "react";
import Fact from "./Fact.jsx";

const FactsList = ({ facts, handleButtonClick }) => (
  <div className="factsList">
    {facts.map((item) => (
      <Fact fact={item} key={item.id} handleButtonClick={handleButtonClick} />
    ))}
  </div>
);

export default FactsList;
