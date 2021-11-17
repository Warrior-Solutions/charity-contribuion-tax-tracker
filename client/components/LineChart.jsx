import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class LineChartContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  render(){
    return (
      <div className="chart">
        <h1> LINE CHART GOES HERE</h1>
      </div>
    )
  }
}

export default LineChartContainer;
