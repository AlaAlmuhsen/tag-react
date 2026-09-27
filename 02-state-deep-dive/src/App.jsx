import { useState } from "react";

function App() {
  return (
    <div>
      <Counter />
      <hr />
      <Counter />
    </div>
  );
}

export default App;

function Counter() {
  console.log("test");
  let [counter, setCounter] = useState(1);

  function handleInc() {
    setCounter(counter + 1);
  }
  function handleDec() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <button onClick={handleDec}>-</button>
      counter: {counter}
      <button onClick={handleInc}>+</button>
    </div>
  );
}
