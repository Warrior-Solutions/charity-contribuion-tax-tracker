import React, { Component, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import CardContainer from "./CardContainer.jsx";
import Contributions from "./Contributions.jsx";
import StatsContainer from "./StatsContainer.jsx";
import { getUserId } from "../services/UserThingyRenameThis.js";
import { UserDataContext } from "../contexts/UserDataContext.js";

const Dashboard = () => {
  // function getDashboardData() {
  //   fetch('/dashboard', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       item: userId
  //     })
  //   })
  //   .then(() => {

  // })
  // }

  // function postYearlyGoal

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
