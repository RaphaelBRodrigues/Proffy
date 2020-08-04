import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/styles/global.css';
import './assets/styles/global.css';
 import Routes from './assets/pages/routes';
import Landing from './assets/pages/Landing';



ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
