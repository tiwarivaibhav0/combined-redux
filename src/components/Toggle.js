import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleState } from "../redux/toggle/ToggleActions";

const Toggle = () => {
  const status = useSelector((state) => state.toggler.status);
  const dispatch = useDispatch();

  return (
    <>
      <div>Toggle : {status ? "ON" : "OFF"}</div>
      <button onClick={() => dispatch(toggleState())}>Toggle State</button>
    </>
  );
};

export default Toggle;
