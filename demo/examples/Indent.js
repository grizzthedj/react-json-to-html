import React from 'react';
import { Link } from 'react-router-dom';
import JsonTable from '../../src/JsonTable';

class Indent extends React.Component {
  render() {
    const json = {
      "Server Name": "foo",
      "Description": "bar",
      "Specs": {
        "IP": "10.100.99.101",
        "MAC": "00:0a:XX:9F:XX:16"
      },
      "Date": "Jan 1, 2018"
    }
    return (
      <div>
        <blockquote>
        <h3>HTML table with increased indent on nested attributes</h3>
        
        <p>An HTML table with increased indent on nested JSON attributes. &nbsp;<Link to="/">Back</Link></p><br />

        <JsonTable json={json} indent={8} />
        <br />

        <pre><code>
          import React from 'react';<br />
          import JsonTable from 'react-json-to-html';<br />
          <br />
          class Indent extends React.Component &#123;<br />
            &nbsp;&nbsp;const json = &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;"Server Name": "foo",<br />
            &nbsp;&nbsp;&nbsp;&nbsp;"Description": "bar",<br />
            &nbsp;&nbsp;&nbsp;&nbsp;"Specs": &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"IP": "10.100.99.101",<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"MAC": "00:0a:XX:9F:XX:16"<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;"Date": "Jan 1, 2018"<br />
            &nbsp;&nbsp;&#125;<br />
            &nbsp;&nbsp;render() &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;JsonTable json=&#123;json&#125; indent=&#123;8&#125; /&gt;<br />
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

export default Indent;
