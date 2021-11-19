import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

//! component
import Login from "./components/Login";
import Chats from "./components/Chats";

//!context
import AuthContextProvider from "./contexts/AuthContextProvider";
const App = () => {
  return (
    <div>
      <AuthContextProvider>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/chats" component={Chats} />
          <Redirect path="/" to="/login" />
        </Switch>
      </AuthContextProvider>
    </div>
  );
};

export default App;
