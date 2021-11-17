import React, {Component} from 'react';
// import {Bar, Line, Pie} from 'react-chartjs-2';
import { PieChart } from 'react-minimal-pie-chart';
class PieChartContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  render(){
    return (
      <div className="pie-chart-container">
        <PieChart className="pie-chart"
          data={[
            { title: 'One', value: 10, color: '#E38627' },
            { title: 'Two', value: 15, color: '#C13C37' },
            { title: 'Three', value: 20, color: '#6A2135' },
          ]}/>;
      </div>
    )
  }
}

export default PieChartContainer;
