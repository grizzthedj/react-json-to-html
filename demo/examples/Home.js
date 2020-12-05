import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div style={{marginLeft: '30px'}}>
        <h2>react-json-to-html</h2>
        <h3><strong>Examples</strong></h3>
        <p>Click the links below to see the examples in action.</p>

        <ul>
          <li><Link to="/simple">Simple HTML table</Link></li>
          <li><Link to="/nested">HTML table with nested attributes</Link></li>
          <li><Link to="/change-styles">Nested HTML table with CSS prop override</Link></li>
          <li><Link to="/indent">HTML table with increased indent on nested attributes</Link></li>
          <li><Link to="/complex">Complex HTML table with multiple nested attributes</Link></li>
        </ul>
      </div>
    );
  }
}

export default Home;