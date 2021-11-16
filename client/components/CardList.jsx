import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, HashRouter } from "react-router-dom";
import Card from './Card.jsx';


const CardList = (props) => {
  return (
    <div className="cardList">
    
      
        <Card />

    </div>
  );
};


export default CardList;
