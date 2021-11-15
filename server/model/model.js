const { Pool } = require('pg');

/** @construct
 *
 *CREATE TABLE users (
  _id SERIAL UNIQUE PRIMARY KEY,
  email varchar(255) NOT NULL,
  password varchar(255),
  oauth_id varchar(255)
  );

 *CREATE TABLE contributions (
  _id SERIAL UNIQUE PRIMARY KEY,
  amount NUMERIC NOT NULL,
  payee varchar(255) NOT NULL,
  category varchar(255) NOT NULL,
  donated_at TIME DEFAULT CURRENT_TIMESTAMP,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(_id);

  );
 *
 *CREATE TABLE yearly_goals (
  _id SERIAL UNIQUE PRIMARY KEY,
  goal_amount NUMERIC,
  current_amount NUMERIC,
  user_id int NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(_id);
  );
 *
 *
 *
**/

const myURI = 'postgres://mzwmrclg:XHg58ZPeu-cAJ0APePTIfGYNJSwrg84S@kashin.db.elephantsql.com/mzwmrclg';


const db = new Pool({ connectionString: myURI });

module.exports = {
  query: async (text, params, callback) => {
    console.log(`🚀🚀 SQL queried with text🚀: ${text} and params🚀: ${params}`);
    return await db.query(text, params, callback);
  }
};