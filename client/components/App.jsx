import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link, HashRouter } from "react-router-dom";

import Dashboard from './Dashboard.jsx';
import Contributions from './Contributions.jsx';
import Login from './Login.jsx'

const App = (props) => {
  return (
    <HashRouter>
    <div>
    {/* <div className="router">
      <h1>hi App</h1>
            <Login />
     
    </div> */}

    <Switch>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/newentry">
        <Contributions />
      </Route>
    </Switch>
  </div>
  </HashRouter>
  )
};


export default App;
