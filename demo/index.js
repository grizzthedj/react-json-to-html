import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { render } from 'react-dom';
import App from './App';
import Simple from './examples/Simple';
import Nested from './examples/Nested';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/simple" component={Simple} />
    <Route path="/nested" component={Nested} />
  </Router>
), document.getElementById('app'))
