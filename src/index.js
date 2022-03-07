import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import { App } from "./App";

function Message(props) {
  return <h1 className="hello">Здравствуйте, {props.name}</h1>;
}

ReactDOM.render(
  <React.StrictMode>{/* <App /> */}</React.StrictMode>,
  document.getElementById("root")
);

const App = <Message name="Богдан" />;
ReactDOM.render(App, document.getElementById("root"));
