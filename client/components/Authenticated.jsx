import React, { useEffect, useMemo, useState } from "react";
import { Redirect, Route } from "react-router";
import { UserDataContext } from "../contexts/UserDataContext.js";
import { loadUserData } from "../services/UserData.js";
import { getUserId } from "../services/UserThingyRenameThis.js";
import Contributions from "./Contributions.jsx";
import Dashboard from "./Dashboard.jsx";

export const Authenticated = () => {

  const [userData, setUserData] = useState();

  const userId = getUserId();

  /*
   * We only re-instantiate the userDataContextValue object if userData changes.
   * This is to avoid a caveat as stated in the React documentation: 
   * 
   * Because context uses reference identity to determine when to re-render,
   * there are some gotchas that could trigger unintentional renders in
   * consumers when a provider’s parent re-renders. 
   */
  const userDataContextValue = useMemo(() => {
    return {
      userData,
      updateUserData: setUserData,
    };
  }, [userData]);


  if (userId && !userData) {
    loadUserData().then(setUserData);
  }

  console.log("Authenticated rendered", userData)

  /*
   * If there is no userId, that means the user is not logged in and should not
   * be on this route...we redirected them to the login if this is the case.
   */
  if (!userId) {
    console.log('User is not logged in...redirecting to login page')
    return <Redirect to="/" />;
  }

  return (
    <UserDataContext.Provider value={userDataContextValue}>
      <Route exact path="/newentry">
        <Contributions />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
    </UserDataContext.Provider>
  );
};
