import React from 'react';
import { Link } from 'react-router';
import JsonTable from '../src/JsonTable';

class App extends React.Component {
  render() {
    return (
      <div style={{marginLeft: '30px'}}>
        <h2>react-json-to-html</h2>
        <h3><strong>Examples</strong></h3>
        <p>Click the links below to see the examples in action.</p>

        <ul>
          <li><Link to="/simple">Simple HTML table</Link></li>
          <li><Link to="/nested">HTML table with nested attributes</Link></li>
        </ul>
      </div>
    );
  }
}

export default App;
