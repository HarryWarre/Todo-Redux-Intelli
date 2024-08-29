import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store/reducers/counter-reducer";
import { decrement, increment } from "./store/actions/counter-actions";

const MainLearnRedux: React.FC = () => {
  const count = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default MainLearnRedux;
