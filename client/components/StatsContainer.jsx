import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PieChartContainer from './PieChart.jsx';
import LineChartContainer from './LineChart.jsx'

const StatsContainer = (props) => {
  return (
    <div>
      <div className="statsContainer">
        <div id="contGoal">
          <div className="cont">Your Yearly Contribution:</div>
          <div className="goal">Your Yearly Goal:</div>
        </div>
        <div className="pie">
          <PieChartContainer />
        </div>
        <div className="graph">
          <LineChartContainer />
        </div>
      </div>
    </div>
  );
};




export default StatsContainer;
