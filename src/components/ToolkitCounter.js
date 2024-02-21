import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
} from "../redux/toolkitCounter/toolkitCounterSlice";

const ToolkitCounter = () => {
  const count = useSelector((state) => state.toolkitCounter.count);
  const dispatch = useDispatch();
  return (
    <div>
      ToolkitCounter
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(6))}>increment</button>
      <button onClick={() => dispatch(decrement(7))}>decrement</button>
    </div>
  );
};

export default ToolkitCounter;
