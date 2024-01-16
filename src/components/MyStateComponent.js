// import { useState } from "react";

// myUseState not able to show data on ui Layer

function myUseState(initialValue) {
  let state = initialValue;

  function setState(newState) {
    state = newState;
    console.log("Component re-rendered with new state:", state);
  }

  return [state, setState];
}

function MyStateComponent() {
  let [count, setCount] = myUseState(1);

  function increMent() {
    setCount(++count);
    // setCount((prev) => prev + 1);
  }

  function decreMent() {
    setCount(count - 1);
    // setCount((prev) => prev - 1);
  }

  console.log("Render", count);
  console.log("Render", count);

  return (
    <div>
      <button onClick={decreMent}>dec</button>
      <button onClick={increMent}>inc</button>
      <h1>{count}</h1>
    </div>
  );
}

export default MyStateComponent;
