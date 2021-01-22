import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Login from "../Components/Login/Login";

const Nav = () => {
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Layout} />
        <Route path="/Login" component={ Login } />
      </Switch>
    </Router>
  );
};



export default Nav;
