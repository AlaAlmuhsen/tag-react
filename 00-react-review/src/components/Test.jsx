import { useState } from "react";

function Test({ name, age }) {
  console.log("Component Test Called");
  let x = 1;
  const [counter, setCounter] = useState(1);

  function handleClick() {
    setCounter(counter + 1);
    console.log(counter);
  }
  function handleClickX() {
    x++;
    console.log(x);
  }
  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      <h1>counter: {counter}</h1>
      <hr />
      <button onClick={handleClickX}>Click x</button>
      <h1>X: {x}</h1>
      <hr />
      <h1>
        {name} {age}
      </h1>
    </>
  );
}

export default Test;
