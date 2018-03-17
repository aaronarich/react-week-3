import React, { Component } from "react";
import Counter from "./Counter";

const Stat = ({ statName, statNumber, statWord }) => (
  <div className="mb4">
    <div className="f5 black mb0 b">{statName}</div>
    <Counter end={statNumber} />
    <div className="f4 lh-1">{statWord}</div>
  </div>
);

export default Stat;
