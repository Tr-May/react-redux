import React from "react";
import "./features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, reset } from "./features/counter/counterSlice";

const App = () => {
  const {count} = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  // console.log(count);
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={()=>dispatch(increase())}>Increase +</button>
      <button onClick={()=>dispatch(decrease())}>Decrease -</button>
      <button onClick={()=>dispatch(reset())}>Reset </button>
    </div>
  );
};

export default App;
