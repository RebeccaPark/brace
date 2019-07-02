import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import './App.scss';

import { Header } from './components/Header';
import { BusinessList } from './views/BusinessList';
import { Details } from './views/Details';
import { Home } from './views/Home';

export function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Route exact={true} path="/" component={Home} />
        <Route path="/list/nyc" component={BusinessList} />
        <Route path="/business/:businessId" component={Details} />
      </div>
    </Router>
  );
}
