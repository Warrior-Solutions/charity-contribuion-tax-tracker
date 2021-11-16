import React, { Component } from 'react';
import CardList from './CardList.jsx';

const CardContainer = (props) => {
  return (
    <div className="cardContainer">

        <button id="addBtn">Add Contribution</button>

        <CardList />

    </div>
  );
};


export default CardContainer;
