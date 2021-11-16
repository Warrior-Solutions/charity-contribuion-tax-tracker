import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

const StatsContainer = (props) => {
  return (
    <div className="statsContainer">
      <div className="cont">Your Yearly Contribution:</div>
      <div className="goal">Your Yearly Goal:</div>
      <div id="pie"></div>
    </div>
  );
};




export default StatsContainer;
