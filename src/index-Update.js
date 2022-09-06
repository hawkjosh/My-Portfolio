import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Linking custom css stylesheet
import './assets/styles/App.css';
// Linking navbar shrink functionality
import './assets/js/navbar.js';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <App />
);