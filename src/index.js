import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';

//import from reat-router-dom
import{BrowserRouter as Router} from 'react-router-dom';

//import HouseContextProvider
import HouseContextProvider from './components/HouseContext';

const root =createRoot(document.getElementById('root'));
root.render(
  <HouseContextProvider>
      <Router>
   <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
  </HouseContextProvider>


);
