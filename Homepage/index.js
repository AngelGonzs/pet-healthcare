import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
  
document.body.style.backgroundColor = "#327af7";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
  );
  