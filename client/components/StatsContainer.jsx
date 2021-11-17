import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

const StatsContainer = (props) => {
  return (
    <div>
    <div className="statsContainer">
      <div id="contGoal">
      <div className="cont">Your Yearly Contribution:</div>
      <div className="goal">Your Yearly Goal:</div>
      </div>
      <div className="pie">PIE</div>
    <div className="graph">GRAPH</div>
    
      </div>
   
    </div>
  );
};




export default StatsContainer;
