import React from 'react';
import {
  Link,
  Route,
  BrowserRouter as Router,
  withRouter
} from 'react-router-dom';

import './App.scss';

import { Button } from './Button';
import { BusinessList } from './views/BusinessList';
import { Details } from './views/Details';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/list/nyc" component={BusinessList} />
        <Route path="/business/:businessId" component={Details} />
      </div>
    </Router>
  );
}

const Header = withRouter((props: {location: {pathname: string}}) => {
  const { location } = props;
  if (location.pathname === "/" || location.pathname === "/list/nyc") {
  return (
    <div className="app__header">
      <div className="app__title">Eat, Look, Feel NYC</div>
      <div className="app__subtitle">Powered by Yelp Fusion</div>
    </div>
  )
  }
  return null;
});

function Home(props: { onButtonClick: () => void }) {
  return (
    <div>
      <div className="app__prompt">
        Click to get information about businesses in NYC!
      </div>
      <div className="app__button">
        <Link to="/list/nyc">
          <Button text="Click Me" />
        </Link>
      </div>
    </div>
  );
}

export default App;
