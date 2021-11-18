import React, {Component} from 'react';
// import {Bar, Line, Pie} from 'react-chartjs-2';
import { PieChart } from 'react-minimal-pie-chart';

import { useContext } from "react";
import { UserDataContext } from "../contexts/UserDataContext.js";



const PieChartContainer = (props) => {
  const { userData } = useContext(UserDataContext);
  // const { pieChartData } = userData;
  // console.log('UserData---------------', userData.pieChart);
  console.log('UserData--------====', userData);

  // console.log('pieChartdata', )

  if (!userData) {
    return <div>userData is null</div>;
  }

  const myData=[
    { title: 'One', value: 10, color: '#E38627' },
    { title: 'Two', value: 15, color: '#C13C37' },
    { title: 'Three', value: 20, color: '#6A2135' },
  ]

      return (
      <div className="pie-chart-container">
        <PieChart className="pie-chart"
          data={myData}/>
      </div>
    )

// class PieChartContainer extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       chartData:props.chartData
//     }

//   }



//   render(){
//     return (
//       <div className="pie-chart-container">
//         <PieChart className="pie-chart"
//           data={myData}/>
//       </div>
//     )
//   }
}

export default PieChartContainer;
