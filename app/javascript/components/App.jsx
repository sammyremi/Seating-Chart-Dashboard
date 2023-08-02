import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-clifford">
        You clicked {count} time(s)
      </h1>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  );
};

export default App;
