import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { App } from './App';

// eslint-disable-next-line no-undef
const { document } = window;

ReactDOM.render(<App />, document.getElementById('root'));
