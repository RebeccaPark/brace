import React, { useEffect, useState } from 'react';
import './App.css';

import { Business } from './Business';

interface Business {
  id: string,
  alias: string,
  name: string,
  image_url: string,
}

function App() {
  const [businesses, setBusinesses] = useState([]);

  async function fetchRequest() {
    const PROXY_URL = 'https://cors-anywhere.herokuapp.com'
    const SEARCH_URL = 'https://api.yelp.com/v3/businesses/search?location=nyc';
    const API_KEY = '6NW29aowuDui7oth0EpBZqYXtVxMfMQKvel4HpQO4FmsyC_5zYlg2GDZym7HXaUoM7xdJC-LVTXATNs9wRoh1ZVaNNa_bBFJpAvDc8xTsByCoq_VGQL3iR5wBjoVXXYx';
    const bearer = `Bearer ${API_KEY}`;

    const fetchData = await fetch(`${PROXY_URL}/${SEARCH_URL}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Authorization': bearer,
      },
    });
    const data = await fetchData.json();
    setBusinesses(data.businesses);
    console.log(data);
  }

  function onButtonClick() {
    fetchRequest();
  }

  return (
    <div className="app">
      { businesses.length === 0 && 'Click the button to get businesses in NYC!'}
      <div className="list">
      { businesses.length > 0 && businesses.map((business: Business) => {
        return (
          <Business 
            name={business.name}
            imageUrl={business.image_url}
          />
        )})
      }
      </div>
      <button onClick={onButtonClick}>
        { businesses.length > 0 && 'Click for more!' }
        { businesses.length === 0 && 'Click Me!' }
      </button>
    </div>
  )
}

export default App;
