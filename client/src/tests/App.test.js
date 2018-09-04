import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('renders without crashing', () => {
  fetch.mockResponseOnce(JSON.stringify({ express: 'Dependencies tree' }))
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
