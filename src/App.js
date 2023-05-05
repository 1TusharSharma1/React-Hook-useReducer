import "./App.css";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div className="counter">
        <h1> Counter </h1>
      </div>

      <div className="numbers">
        <h1>{count}</h1>
      </div>
      <Button variant="success" onClick={() => setCount(count + 1)}>
        Increase Count
      </Button>
      <Button variant="warning" onClick={() => setCount(count - 1)}>
        Decrease Count
      </Button>
      <Button variant="danger" onClick={() => setCount(0)}>
        Reset
      </Button>
    </div>
  );
}

export default App;
