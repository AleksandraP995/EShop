
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useState } from 'react';
import { MyGlobalContext } from './assets/useContext/NewContext';
import React from 'react';
//import ExampleContext from "./assets/useContext/myContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

reportWebVitals();
