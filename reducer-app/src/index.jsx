import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Students from "./containers/Students";
import Feelfreetocode from "./containers/Feelfreetocode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Feelfreetocode />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
