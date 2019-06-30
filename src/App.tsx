import React, { useEffect, useState } from 'react';
import './App.scss';

import { Business } from './Business';
import { Button } from './Button';
import { fetchBusinesses } from './fetch';

interface Business {
  id: string,
  alias: string,
  name: string,
  image_url: string,
  location: {display_address: string},
  price: string,
  rating: number,
  categories: {title: string}[],
}

function App() {
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 10;

  async function getBusinesses() {
    const fetchData = await fetchBusinesses(pageNumber, itemsPerPage);
    const data = await fetchData.json();

    setBusinesses([...businesses, ...data.businesses]);
    setPageNumber(pageNumber + itemsPerPage);
    console.log(data);
  }

  function onButtonClick() {
    getBusinesses();
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
      <div className="app__list">
      { businesses.length > 0 && businesses.map((business: Business) => {
        return (
          <Business
            id={business.id}
            name={business.name}
            imageUrl={business.image_url}
            address={business.location.display_address}
            price={business.price}
            rating={business.rating}
            categories={business.categories}
          />
        )})
      }
      </div>
      <div className="app__button">
        <Button onClick={onButtonClick}
                text={businesses.length === 0 ? 'Click Me!' : `Click for ${itemsPerPage} more!`} />
      </div>
    </div>
  );
}

export default App;
