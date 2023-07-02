import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom";

import Main from './Main';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Main />

    </Router>
  </React.StrictMode>
);

