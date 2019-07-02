import * as React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../components/Button';

export function Home() {
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
