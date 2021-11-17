import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PieChartContainer from './PieChart.jsx';
import LineChartContainer from './LineChart.jsx'


import { useContext } from "react";
import { UserDataContext } from "../contexts/UserDataContext.js";

// const CardList = (props) => {
//   const { userData } = useContext(UserDataContext);

//   if (!userData) {
//     return <div>userData is null</div>;
//   }

//   return (
//     <div className="cardList">
//       {userData.listData.map((listItem, index) => (
//         // TODO Change this to card
//         // <div key={index}>
//         //   {listItem.amount}
//         // </div>
//         <Card key={index} li={listItem} />
//       ))}
//     </div>
//   );
// };

// export default CardList;

const StatsContainer = (props) => {

  const { userData } = useContext(UserDataContext);
  if (!userData) {
    return <div>userData is null</div>;
  }

  console.log('in stats container, userData: ', userData);

  return (
    <div>
      <div className="statsContainer">
        <div id="contGoal">
          <div className="cont">
          Your Yearly Contribution:
            <div className="containerDollarAmount">
            {userData.currentAmount}
            </div>
          </div>
          <div className="cont">Your Yearly Goal:
          <div className="containerDollarAmount">
            {userData.goalAmount}
            </div>

          </div>
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
