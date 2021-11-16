import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import CardContainer from './CardContainer.jsx';
import Contributions from './Contributions.jsx';
import StatsContainer from './StatsContainer.jsx';

const Dashboard = (props) => {
  return (
     <Switch>
        <Route exact path="/dashboard">
          <div className="dashboard">
            <div className="row">
              <div className="column left">
                <CardContainer />
              </div>
              <div className="column right">
                <Switch>
                    <Route exact path="/addContribution">
                        <Contributions />
                    </Route>
                    <Route exact path="/dashboard">
                        <StatsContainer />
                    </Route>
                </Switch>
              </div>
            </div>
          </div>
        </Route>
      </Switch>
  );
};

export default Dashboard;
