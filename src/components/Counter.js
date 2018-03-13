import React from "react";
import CountUp from "react-countup";

const Counter = ({ start = 0, end }) => (
  <div ClassName="f1 orange">
    <CountUp start={start} end={end} />
  </div>
);

export default Counter;
