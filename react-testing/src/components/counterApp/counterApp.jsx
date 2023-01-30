import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="justify-content-center p-4 shadow rounded">
      <h1>Counter App</h1>
      <hr />
      <button
        data-testid="counter-button"
        className="btn btn-tomato col-4"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </div>
  );
}
