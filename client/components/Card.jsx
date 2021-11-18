import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, HashRouter } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card">
        
        <p>{props.li.date}</p>
        <p>{props.li.category}</p>
        <p>{props.li.amount}</p>
        <p>{props.li.memo}</p>
       
    

    </div>
  );
};


export default Card;
