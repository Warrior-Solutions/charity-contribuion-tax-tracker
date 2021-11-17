import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class PieChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  render(){
    return (
      <div className="chart">
        <h1>HERE IS THE PIE CHART</h1>
      </div>
    )
  }
}

export default PieChart;
