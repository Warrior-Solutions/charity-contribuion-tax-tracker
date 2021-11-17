import React, { Component } from 'react';
import { HashRouter, Link } from 'react-router-dom';
import CardList from './CardList.jsx';

const CardContainer = (props) => {
  return (
    <HashRouter>
      <div className="cardContainer">
        <Link className="newentry" to="/newentry">
          <button id="addBtn">Add Contribution</button>
        </Link>
        <CardList />
      </div>
    </HashRouter>
  );
};


export default CardContainer;
