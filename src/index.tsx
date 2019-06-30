import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import App from './App';
import { Details } from './views/Details';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/business/:businessId" component={Details} />
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
