import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link, HashRouter } from "react-router-dom";
import { useState, useEffect } from 'react';

import Dashboard from './Dashboard.jsx';
import Contributions from './Contributions.jsx';
import Login from './Login.jsx'

//write function in app, change to class comp, pass down fx to login, fx change state in app
//bind and pass down function to login
//fetch loginAttempt
  // const [listData, setListData] = useState();
  // const [pieChartData, setPieChartData] = useState();
  // const [currentAmount, setCurrentAmount] = useState();
  // const [goalAmount, setGoalAmount] = useState();
  // const [lineGraphData, setLineGraphData] = useState();

// const App = (props) => {
class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(email, password) {
    fetch('/loginAttempt', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password
        }),
      })
      .then(res => res.json())
      .then(res => {
        console.log('hello');
        console.log('res.locals: ' + res.locals);
        const newState = { ...this.state };
        newState.listData = res.locals.listData;
        newState.pieChartData = res.locals.pieChartData;
        newState.currentAmount = res.locals.currentAmount;
        newState.goalAmount = res.locals.goalAmount;
        newState.lineGraphData = res.locals.lineGraphData;
        newState.userId = res.locals.userId;
        this.setState(newState)
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <HashRouter>
      <div>
      <Switch>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <Login handleLogin={this.handleLogin} />
        </Route>
        <Route exact path="/newentry">
          <Contributions />
        </Route>
      </Switch>
      </div>
      </HashRouter>
    )
  } 
};


export default App;
