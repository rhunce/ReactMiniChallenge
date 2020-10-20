import React from "react";

const Fact = (props) => {
  console.log(props);
  return (
    <div className="factCard">
      <h1>{props.fact.animal}</h1>
      <img src={props.fact.image} width="600" height="400" />
      <h3>{props.fact.fact}</h3>
    </div>
  );
};

export default Fact;
