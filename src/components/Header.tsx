import * as React from 'react';
import { withRouter } from 'react-router-dom';

export const Header = withRouter(
  ({ location }: { location: { pathname: string } }) => {
    if (location.pathname === '/' || location.pathname === '/list/nyc') {
      return (
        <div className="app__header">
          <div className="app__title">Eat, Look, Feel NYC</div>
          <div className="app__subtitle">Powered by Yelp Fusion</div>
        </div>
      );
    }
    return null;
  },
);
