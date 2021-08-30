// import { useContext } from "react";
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/todoList" component={TodoList} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
