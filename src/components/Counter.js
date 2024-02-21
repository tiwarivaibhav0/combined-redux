import React from "react";
import { decrement, increment } from "../redux/counter/CounterActions";
import { connect } from "react-redux";

const Counter = (props) => {
  const { count, increment, decrement, abc } = props;
  return (
    <div>
      <h1>{count}</h1>
      <h2>{abc}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
