import React from 'react';

import './Button.scss';

export function Button(props: {onClick(): void, text: string}) {
  return(
    <button 
      className="button"
      onClick={props.onClick}>
      {props.text}
    </button>
  )
}