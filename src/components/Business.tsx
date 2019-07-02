import React from 'react';
import { Link } from 'react-router-dom';
import './Business.scss';

export function Business({
  id,
  name,
  imageUrl,
  address,
  price,
  rating,
  categories,
}: {
  id: string;
  name: string;
  imageUrl: string;
  address: string;
  price: string;
  rating: number;
  categories: { title: string }[];
}) {
  return (
    <div className="business">
      <div
        className="business__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="business__info">
        <div className="business__header">
          <div className="business__name">
            <Link to={`/business/${id}`}>{name}</Link>
          </div>
          <div className="business__subheader">
            <div className="business__category">
              {categories.map((category) => category.title).join(', ')}
            </div>
          </div>
        </div>
        <div className="business__address">{address}</div>
        <div className="business__footer">
          <div className="business__rating">
            {rating}
            /5.0
          </div>
          <div className="business__price">{price}</div>
        </div>
      </div>
    </div>
  );
}
