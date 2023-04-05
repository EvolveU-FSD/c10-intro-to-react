import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(100);
  return (
    <div className="App">
      <h1>Count is {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me to Increment
      </button>
    </div>
  );
}

export default App;
