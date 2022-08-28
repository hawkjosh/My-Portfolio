import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/styles/index.css';
import Navbar from './assets/js/navbar.js';
import './assets/styles/App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <App />
);

reportWebVitals();
