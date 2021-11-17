import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import CardContainer from './CardContainer.jsx';
import Contributions from './Contributions.jsx';
import StatsContainer from './StatsContainer.jsx';

const Dashboard = () => {
  const [userId, setUserId] = useState([]);

  // const getUserInfo = () => {

  



  return (
    <div>
      <div className="dashboard">
        <div className="column left">
        <CardContainer />
      </div>

        <div className="column right">
          <Switch>
          <Route exact path="/newentry">
              <Contributions />
            </Route>
            <Route exact path="/dashboard">
              <StatsContainer />
            </Route>
          </Switch>
        </div>
        </div>
    </div>
  );
};

export default Dashboard;
