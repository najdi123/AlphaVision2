import React from "react";
import { useCountUp } from "react-countup";

const Counter1 = () => {
  const { countUp } = useCountUp({ start: 50, end: 116 });
  return <div className="counter1">{countUp}</div>;
};
export default Counter1;
