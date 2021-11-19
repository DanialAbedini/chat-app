import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//! component
import Login from "./components/Login";
const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Redirect path="/" to="/login" />
      </Switch>
    </div>
  );
};

export default App;
