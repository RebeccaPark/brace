import React from 'react';
import './Business.scss';

export function Business(props: { name: string, imageUrl: string }) {
  return (
    <div className="business">
      <div
        className="business__image"
        style={{ backgroundImage: `url(${props.imageUrl})` }} />
      <div className="business__name">
        {props.name}
      </div>
    </div>
  )
};