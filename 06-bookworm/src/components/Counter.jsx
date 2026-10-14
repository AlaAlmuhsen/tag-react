import { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  //   console.log("Counter component rendered");

  useEffect(() => {
    console.log("UseEffect");

    // cleanUp functions
    return () => {
      console.log("the counter component unMounted");
    };
  }, [counter]);

  //   console.log("test");

  //   component life Cycle  Mount -> reRender -> Unmout

  // empty dep array will let the useEffect run only on Mount
  // dep array with a value will let the useEffect run on mount and whenever the value is changed
  // without dep array the useEffect will call the function everyTime (mount / reRender)
  return (
    <div>
      Counter
      <br />
      <button onClick={() => setCounter((i) => i + 1)}>counter{counter}</button>
      <br />
      <button onClick={() => setCounter2((i) => i + 1)}>
        2 Counter{counter2}
      </button>
    </div>
  );
}

export default Counter;
