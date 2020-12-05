import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import App from './App';

render((
  <BrowserRouter basename="/react-json-to-html/demo/public">
    <App />
  </BrowserRouter>
), document.getElementById('app'))
