import React, { useState, useEffect } from 'react';

import './BusinessList.scss';

import { Business } from '../Business';
import { Business as BusinessInterface } from '../interfaces';
import { fetchBusinesses } from '../fetch';
import { Button } from '../Button';

export function BusinessList() {
  const [loading, setLoading] = useState<boolean>(true);
  const [businesses, setBusinesses] = useState<BusinessInterface[]>([]);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 10;
  
  async function getBusinesses() {
    setLoading(true);
    const fetchData = await fetchBusinesses(pageNumber, itemsPerPage);
    const data = await fetchData.json();

    setBusinesses([...businesses, ...data.businesses]);
    setPageNumber(pageNumber + itemsPerPage);
    setLoading(false);
    console.log(data);
  }
  
  useEffect(() => {
    getBusinesses();
  }, []);

  return (
    <div className="businessList">
      {businesses.length > 0 && businesses.map((business: BusinessInterface) =>
        (
          <Business
            id={business.id}
            name={business.name}
            imageUrl={business.image_url}
            address={business.location.display_address}
            price={business.price}
            rating={business.rating}
            categories={business.categories}
          />
        ))
      }
      {loading && <div>Loading...</div>}
      {!loading && 
        <div className="businessList__moreButton">
          <Button onClick={getBusinesses}
                  text={`Click for ${itemsPerPage} more`} />
        </div>
      }
    </div>
  );
}
