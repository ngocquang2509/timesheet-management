import { useState } from "react";
import { DisplayCounter } from "./DisplayCounter";
import { Increment } from "./Increment";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increaseCounter = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <h1>Lifting State Up example</h1>
      <DisplayCounter count={count} />
      <Increment onClickIncrease={increaseCounter} />
    </>
  );
};
