import React from 'react';
import { Link } from 'react-router-dom';
import JsonTable from '../../src/JsonTable';

class Simple extends React.Component {
  render() {
    const json = {
      "Server Name": "foo",
      "Description": "bar",
      "Date": "Jan 1, 2018"
    }
    return (
      <div>
        <blockquote>
        <h3>Simple HTML table</h3>
        
        <p>A simple HTML table with 3 key value pairs. &nbsp;<Link to="/">Back</Link></p><br />

        <JsonTable json={json}/>
        <br />

        <pre><code>
          import React from 'react';<br />
          import JsonTable from 'react-json-to-html';<br />
          <br />
          class Simple extends React.Component &#123;<br />
            &nbsp;&nbsp;const json = &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;"Server Name": "foo",<br />
            &nbsp;&nbsp;&nbsp;&nbsp;"Description": "bar",<br />
            &nbsp;&nbsp;&nbsp;&nbsp;"Date": "Jan 1, 2018"<br />
            &nbsp;&nbsp;&#125;<br />
            &nbsp;&nbsp;render() &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;JsonTable json=&#123;json&#125; /&gt;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;)<br />
            &nbsp;&nbsp;&#125;<br />
          &#125;<br />
        </code></pre>

        <Link to="/">Back</Link>
        </blockquote>
      </div>
    );
  }
}

export default Simple;
