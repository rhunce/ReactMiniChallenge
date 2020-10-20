import React from "react";
import Fact from "./Fact.jsx";

const FactsList = (props) => (
  <div className="factsList">
    {props.facts.map((item) => (
      <Fact fact={item} key={item.id} />
    ))}
  </div>
);

export default FactsList;
