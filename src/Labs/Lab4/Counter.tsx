import React, { useState } from "react";
import { useSelector } from "react-redux";
export default function Counter() {
  const [count, setCount] = useState(7);
  console.log(count);
  const { message } = useSelector((state: any) => state.helloReducer);
  return (
    <div id="wd-counter-use-state">
      <h3>{message}</h3>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Up </button>
      <button onClick={() => setCount(count - 1)}>Down </button>
      <hr />
    </div>
  );
}
