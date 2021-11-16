import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// const App = () => {
//   return (
//     <div className="App">
//       <h1>Hello Pikachu</h1>
//     </div>
//   );
// }

const App = (props) => {
  return (
    <div className="router">
      <main>
        <Switch>
          <Route exact path="/dashboard/:id" component={Dashboard} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </main>
    </div>
  );
};


export default App;
