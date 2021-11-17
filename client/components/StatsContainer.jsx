import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PieChart from './PieChart.jsx';
import LineChart from './LineChart.jsx'

const StatsContainer = (props) => {
  return (
    <div>
      <div className="statsContainer">
        <div id="contGoal">
          <div className="cont">Your Yearly Contribution:</div>
          <div className="goal">Your Yearly Goal:</div>
        </div>
        <div className="pie">
          <PieChart />
        </div>
        <div className="graph">
          <LineChart />
        </div>
      </div>
    </div>
  );
};




export default StatsContainer;
