import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0); // [value , setValue]
  let [doubleClickCount, setDoubleClickCount] = useState(0); // [value , setValue]

  useEffect(() => {
    console.log("This Will Invoke First Time");
    // changin value
  }, []); // ek bar chalega

  useEffect(() => {
    console.log("This Will Invoke Whenever count changes");
    // changin value
  }, [count]); // jab jab count change hoga tab tab chalega

  useEffect(() => {
    console.log("This Will Invoke Whenever Double Click Count changes");
    // changin value
  }, [doubleClickCount]); // jab jab dblclick value change hoga tab tab chalega

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("In Every Render");
  }); // bina [] vala , hamesa chalge ajb jb re rendring hogi

  const handleDoubleClick = () => {
    setDoubleClickCount(doubleClickCount + 1);
  };
  return (
    <div className="App">
      <h1 onClick={handleClick}>Hooks</h1>

      <h2>{count}</h2>
      <h2 onDoubleClick={handleDoubleClick}>
        Double Click Here {doubleClickCount}
      </h2>
    </div>
  );
}

export default App;
