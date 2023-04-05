import React from "react";

const Adder = (props) => {
  const setCount2 = props.setCount2;
  const count2 = props.count2;
  return (
    <button onClick={() => setCount2(count2 + 1)}>
      Click Me to Increment Count 2
    </button>
  );
};

export default Adder;
