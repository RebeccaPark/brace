import React from 'react';

export function Business(props: {name: string, imageUrl: string}) {
  return(
    <div className="business">
      {props.name}
      <img src={props.imageUrl} />
    </div>
  )
};