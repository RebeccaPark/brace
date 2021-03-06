import React, { useState, useEffect } from 'react';

import './BusinessList.scss';

import { Business } from '../components/Business';
import { Business as BusinessT, fetchBusinesses } from '../api';
import { Button } from '../components/Button';

export function BusinessList() {
  const [loading, setLoading] = useState<boolean>(true);
  const [businesses, setBusinesses] = useState<BusinessT[]>([]);
  const [filteredBusinesses, setFilteredBusinesses] = useState<BusinessT[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 10;

  async function getBusinesses() {
    setLoading(true);
    const data = await fetchBusinesses(pageNumber, itemsPerPage);

    setBusinesses([...businesses, ...data.businesses]);
    setFilteredBusinesses([...businesses, ...data.businesses]);
    setPageNumber(pageNumber + itemsPerPage);
    setInputValue('');

    setLoading(false);
  }

  useEffect(() => {
    getBusinesses();
  }, []);

  function filterBusinesses(event: { target: { value: string } }) {
    const compareValue = event.target.value.toLowerCase();
    setInputValue(event.target.value);
    let matchingBusinesses = businesses;

    if (compareValue || compareValue.length > 0) {
      matchingBusinesses = businesses.filter((business: BusinessT) =>
        business.name.toLowerCase().includes(compareValue),
      );
    }
    setFilteredBusinesses(matchingBusinesses);
  }

  return (
    <div className="businessList">
      {!loading && (
        <input
          className="businessList__input"
          value={inputValue}
          placeholder="Search by business name"
          onChange={(e) => filterBusinesses(e)}
        />
      )}
      {filteredBusinesses.length > 0 &&
        filteredBusinesses.map((business: BusinessT) => (
          <Business
            key={business.id}
            id={business.id}
            name={business.name}
            imageUrl={business.image_url}
            address={business.location.display_address}
            price={business.price}
            rating={business.rating}
            categories={business.categories}
          />
        ))}
      {loading && <div>Loading...</div>}
      {!loading && (
        <div className="businessList__moreButton">
          <Button
            onClick={getBusinesses}
            text={`Click for ${itemsPerPage} more`}
          />
        </div>
      )}
    </div>
  );
}
