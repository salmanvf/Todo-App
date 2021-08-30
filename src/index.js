import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import { TodoProvider } from "./Context/TodoContext";
// import Todo from "./Components/todo";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
