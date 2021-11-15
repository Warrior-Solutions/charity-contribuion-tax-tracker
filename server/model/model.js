const { Pool } = require('pg');

/** @construct
 *
 *CREATE TABLE users (
  _id SERIAL UNIQUE PRIMARY KEY,
  email varchar(255) NOT NULL,
  password varchar(255),
  oauth_id
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