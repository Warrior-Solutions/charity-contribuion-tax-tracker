import React, {Component} from 'react';
// import {Bar, Line, Pie} from 'react-chartjs-2';
import {
  // main component
  Chart,
  // graphs
  Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title,
  // wrappers
  Layer, Animate, Transform, Handlers,
  // helpers
  DropShadow, Gradient
} from 'rumble-charts';

class LineChartContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }


    const series = [
      {
        data: [
          1,
          2,
          3
        ]
      },
      {
        data: [
          5,
          7,
          11
        ]
      },
      {
        data: [
          13,
          17,
          19
        ]
      }
    ];
  }



  render(){
    return (
      <div className="chart">
        <h1> LINE CHART GOES HERE</h1>
        <Chart
        height={300}
        minY={0}
        series={[
          {
            data: [
              1,
              2,
              3
            ]
          },
          {
            data: [
              5,
              7,
              11
            ]
          },
          {
            data: [
              13,
              17,
              19
            ]
          }
        ]}
        width={600}
      >
        <Lines />
      </Chart>
      </div>
    )
  }
}

export default LineChartContainer;
