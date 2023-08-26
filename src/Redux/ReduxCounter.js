import { useSelector, useDispatch } from "react-redux";
const ReduxCounter = () => {
  const dispatch = useDispatch();
  const [count] = useSelector((state) => {
    console.log(state);
    return [state.count];
  });
  const increaseCount = () => {
    console.log("increaseCount");
    dispatch({ type: "increase" });
  };

  const decreaseCount = () => {
    console.log("decreaseCounter");
    dispatch({ type: "decrease" });
  };

  const resetCount = () => {
    console.log("resetCounter");
    dispatch({ type: "reset" });
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
