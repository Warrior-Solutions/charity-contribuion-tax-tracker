import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom';

// uncomment so that webpack can bundle styles
import styles from './scss/application.scss';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
