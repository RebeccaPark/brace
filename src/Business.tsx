import React from 'react';
import './Business.scss';

export function Business(props: { name: string, imageUrl: string, address: string, price: string, rating: number, categories: {title: string}[] }) {
  return (
    <div className="business">
      <div
        className="business__image"
        style={{ backgroundImage: `url(${props.imageUrl})` }} />
      <div className="business__info">
        <div className="business__header">
          <div className="business__name">
            {props.name}
          </div>
          <div className="business__subheader">
            <div className="business__category">
            {props.categories.map(category => category.title).join(', ')}
            </div>
          </div>
        </div>
        <div className="business__address">
          {props.address}
        </div>
        <div className="business__footer">
          <div className="business__rating">
            {props.rating}/5.0
        </div>
          <div className="business__price">
            {props.price}
          </div>
        </div>
      </div>
    </div>
  )
};