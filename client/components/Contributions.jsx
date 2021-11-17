import React, { Component } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

const Contributions = (props) => {
  return (
    <main id="site-main">
      <div className="container">
        {/* <form onSubmit={handleSubmit}> */}
          <table className="newentrytable">
            <tr>
              <th>Date:</th>
              <td><input name="date" type="text" placeholder="date" 
              // defaultValue={post.date}
              ></input></td>
            </tr>
            <tr>
              <th>Description:</th>
              <td><input name="description" type="text" placeholder="description" 
              
              // defaultValue={post.description}
              ></input></td>
            </tr>
            <tr>
              <th>Distance:</th>
              <td><input name="distance" type="text" placeholder="distance" 
              
              // defaultValue={post.distance}
              ></input></td>
            </tr>
            <tr>
              <th>Time:</th>
              <td><input name="run_time" type="text" placeholder="run time" 
              
              // defaultValue={post.run_time}
              ></input></td>
            </tr>
            <tr className="entrybtn">
            <input id="entrybutton" type="submit" value="Submit"/>
            </tr>
          </table>
          
        {/* </form> */}
        
      </div>
      
    </main>
  );
};


export default Contributions;
