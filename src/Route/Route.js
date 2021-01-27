import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

const Nav = () => {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Layout} />
        <Route path="/Login" component={ Login } />
        <Route path="/Register" component= { Register} />
      </Switch>
    </Router>
  );
};



export default Nav;
