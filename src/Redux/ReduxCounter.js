import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, reset } from "../Actions/Counteractions";

const ReduxCounter = () => {
  let step = 4;
  const dispatch = useDispatch();
  const [count] = useSelector((state) => {
    console.log(state);
    return [state.counter.count];
  });
  const increaseCount = () => {
    console.log("increaseCount");
    dispatch(increase(step));
  };

  const decreaseCount = () => {
    console.log("decreaseCounter");
    dispatch(decrease());
  };

  const resetCount = () => {
    console.log("resetCounter");
    dispatch(reset());
  };
  return (
    <div>
      Count={count}
      <button onClick={increaseCount}>Increase</button>
      <br />
      <button onClick={decreaseCount}>Decrease</button>
      <br />
      <button onClick={resetCount}>Reset</button>
    </div>
  );
};

export default ReduxCounter;
