import React from 'react';

export function Button(props: {onClick(): void, text: string}) {
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}