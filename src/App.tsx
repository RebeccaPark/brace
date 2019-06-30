import React, { useEffect, useState } from 'react';
import './App.scss';

import { Business } from './Business';
import { Button } from './Button';

interface Business {
  id: string,
  alias: string,
  name: string,
  image_url: string,
  location: {display_address: string},
  price: string,
  rating: number,
}

function App() {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [pageNumber, setPageNumber] = useState(0);

  async function fetchRequest() {
    const PROXY_URL = 'https://cors-anywhere.herokuapp.com'
    const SEARCH_URL = 'https://api.yelp.com/v3/businesses/search?location=nyc&limit=10';
    const API_KEY = '6NW29aowuDui7oth0EpBZqYXtVxMfMQKvel4HpQO4FmsyC_5zYlg2GDZym7HXaUoM7xdJC-LVTXATNs9wRoh1ZVaNNa_bBFJpAvDc8xTsByCoq_VGQL3iR5wBjoVXXYx';
    const bearer = `Bearer ${API_KEY}`;
    const itemsPerPage = 10;

    const fetchData = await fetch(`${PROXY_URL}/${SEARCH_URL}&offset=${pageNumber*itemsPerPage}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Authorization': bearer,
      },
    });
    const data = await fetchData.json();
    setBusinesses([...businesses, ...data.businesses]);
    setPageNumber(pageNumber + itemsPerPage);
    console.log(data);
  }

  function onButtonClick() {
    fetchRequest();
  }

  return (
    <div className="app">
      <div className="app__header">
        <div className="app__title">Eat, Look, Feel NYC</div>
        <div className="app__subtitle">Powered by Yelp Fusion</div>
      </div>
      { businesses.length === 0 && 
        <div className="app__prompt">
          Click to get information about businesses in NYC!
        </div>
      }
      <div className="list">
      { businesses.length > 0 && businesses.map((business: Business) => {
        return (
          <Business 
            name={business.name}
            imageUrl={business.image_url}
            address={business.location.display_address}
            price={business.price}
            rating={business.rating}
          />
        )})
      }
      </div>
      <Button onClick={onButtonClick}
              text={businesses.length === 0 ? 'Click Me!' : 'Click for more!'} />
    </div>
  );
}

export default App;
