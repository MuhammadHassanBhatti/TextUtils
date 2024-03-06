import React, { useState, useEffect } from "react";

const Hooks = () => {
  const [state, setState] = useState(0);
  const [state1, setState1] = useState(0);

  // condition 1

  const increment = (e) => {
    setState(state + 1);
  };

  const increment1 = (e) => {
    setState1(state1 + 1);
  };

  useEffect(() => {
    console.log("condition 1");
  });

  // condition 2
  useEffect(() => {
    console.log("condition 2");
  }, [state1]);

  // condition 3
  useEffect(() => {
    console.log("condition 3");
  }, [state]);

  return (
    <div>
        state 1
      <h1>{state}</h1>
      <button onClick={increment}>Click 1</button>
      <br />
      state 2
      <h1>{state1}</h1>
      <button onClick={increment1}>Click 2</button>
    </div>
  );
};

export default Hooks;
