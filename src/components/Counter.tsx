import { useApp } from "../hooks/useApp";

export const Counter = () => {
  const { count, counterDispatch } = useApp();

  function increment() {
    counterDispatch({
      type: "INCREMENT",
    });
  }

  function decrement() {
    counterDispatch({
      type: "DECREMENT",
    });
  }

  return (
    <div>
      <h1>The counter is {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};
