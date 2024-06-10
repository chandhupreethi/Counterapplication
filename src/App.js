import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Counter Application</h1>
      <p>add and delete the count</p>
      <Count />
    </div>
  );
}

function Count() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
export default App;
