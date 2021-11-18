import React, { useEffect, useMemo, useState } from "react";
// import { Switch, Route } from 'react-router-dom';
import { HashRouter, Route, Switch } from "react-router-dom";
import { UserDataContext } from "../contexts/UserDataContext.js";
import { loadUserData } from "../services/UserData.js";
import { getUserId } from "../services/UserThingyRenameThis.js";
import { Authenticated } from "./Authenticated.jsx";
import Login from "./Login.jsx";
//write function in app, change to class comp, pass down fx to login, fx change state in app
//bind and pass down function to login
//fetch loginAttempt
// const [listData, setListData] = useState();
// const [pieChartData, setPieChartData] = useState();
// const [currentAmount, setCurrentAmount] = useState();
// const [goalAmount, setGoalAmount] = useState();
// const [lineGraphData, setLineGraphData] = useState();

// const App = (props) => {

export const App = () => {

  return (
    <HashRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Authenticated />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default App;
