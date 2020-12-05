import React from 'react';
import { Switch, Route } from 'react-router-dom';
import JsonTable from '../src/JsonTable';
import { Home, Simple, Nested, ChangeStyles, Complex, Indent } from './examples/Index';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/simple" component={Simple} />
          <Route path="/nested" component={Nested} />
          <Route path="/change-styles" component={ChangeStyles} />
          <Route path="/complex" component={Complex} />
          <Route path="/indent" component={Indent} />
        </Switch>
      </div>
    );
  }
}

export default App;
