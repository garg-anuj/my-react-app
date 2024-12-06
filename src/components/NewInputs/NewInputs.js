import { useState } from "react";

const NewInputs = () => {
  const [initialValue, setInitialValue] = useState("");
  const [data, setData] = useState([]);

  const handleAddTask = () => {
    // setData()
    setData([...data, initialValue]);
  };

  const handleInput = (e) => {
    setInitialValue(e.target.value);
  };
  console.log(data);

  return (
    <>
      <input
        placeholder="Enter Any Value"
        value={initialValue}
        name={initialValue}
        onChange={handleInput}
      ></input>

      <button onClick={handleAddTask}>Add task</button>
      <h1>Results :- </h1>
      <div>{initialValue}</div>

      {data.map((list, idx) => {
        return (
          <div key={idx}>
            <div> {list}</div>
          </div>
        );
      })}
    </>
  );
};

export default NewInputs;
