import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { render } from 'react-dom';
import App from './App';
import Simple from './examples/Simple';
import Nested from './examples/Nested';
import Complex from './examples/Complex';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/simple" component={Simple} />
    <Route path="/nested" component={Nested} />
    <Route path="/complex" component={Complex} />
  </Router>
), document.getElementById('app'))
