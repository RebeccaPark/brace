import React from 'react';

import './Button.scss';

export function Button({ text, onClick }: { onClick?(): void; text: string }) {
  return (
    <button className="button" onClick={onClick} type="button">
      {text}
    </button>
  );
}
