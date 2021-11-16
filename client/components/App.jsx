import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Dashboard from './Dashboard.jsx';
import Contributions from './Contributions.jsx';

const App = (props) => {
  return (
    <div className="router">
      <main>
        <h1>im in APP.</h1>
        {/* <Router>
          <Switch>
            <Route exact path="/dashboard/:id" component={Dashboard} />
            <Route exact path="/login" component={Login} />
          </Switch>
          <Contributions />
        </Router> */}
      </main>
    </div>
  );
};


export default App;
