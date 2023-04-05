import { useState } from "react";
import Adder from "./Adder";
import "./App.css";
import Displayer from "./Displayer";

function App() {
  const [count, setCount] = useState(100);
  const [count2, setCount2] = useState(1);
  console.log("count is ", count);
  console.log("count2 is ", count2);

  return (
    <div className="App">
      <h1>Count is {count}</h1>
      <Displayer count2={count2} />
      <button onClick={() => setCount(count + 1)}>
        Click Me to Increment
      </button>
      <Adder count2={count2} setCount2={setCount2} />
    </div>
  );
}

export default App;
