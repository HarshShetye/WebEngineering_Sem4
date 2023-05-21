import React from "react";

function PropsExample(props) {
  return (
    <div>
      <h3>Props Example:</h3>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default PropsExample;
