import React, { Component } from 'react';
import { useHistory } from 'react-router';
import { Switch, Route, HashRouter } from 'react-router-dom';

const Contributions = () => {

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault()
    const post = {};
    for (const input of e.target) {
      const {name, value} = input;
      if (!name) {
        continue;
      }
      post[name] = value;
    }
    post.userId = 
    fetch("http://localhost:3000/dashboard/addContribution", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post)
    }).then(
      () => {
        history.push('/dashboard')
      }
    );
  }

  return (
    <main id="site-main">
      <div className="container">
        <form onSubmit={handleSubmit}>
        <table className="newentrytable">
          <tr>
            <th>Charity Organization:</th>
            <td>
              <input
                name="charity"
                type="text"
                placeholder="charity"
                // defaultValue={post.date}
              ></input>
            </td>
          </tr>
          <tr>
            <th>Amount:</th>
            <td>
              <input
                name="amount"
                type="text"
                placeholder="amount"

                // defaultValue={post.description}
              ></input>
            </td>
          </tr>
          <tr>
            <th>Date:</th>
            <td>
              <input
                name="date"
                type="text"
                placeholder="date"

                // defaultValue={post.distance}
              ></input>
            </td>
          </tr>
          <tr>
            <th>Category:</th>
            <td>
              <input
                name="category"
                type="text"
                placeholder="category"

                // defaultValue={post.run_time}
              ></input>
            </td>
          </tr>
          <tr>
            <th>Memo:</th>
            <td>
              <input
                name="run_time"
                type="text"
                placeholder="memo"

                // defaultValue={post.run_time}
              ></input>
            </td>
          </tr>
        </table>

        <div className="entrybtn">
          <input id="entrybutton" type="submit" value="Submit" />
        </div>

        </form>
      </div>
    </main>
  );
};


export default Contributions;
