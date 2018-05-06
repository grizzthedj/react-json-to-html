import React from 'react';
import { Link } from 'react-router';
import JsonTable from '../../src/JsonTable';

class Complex extends React.Component {
  render() {
    const json = {
      "Server Name": "foo",
      "Description": "bar",
      "Date": "Jan 1, 2018",
      "Specs": {
        "Network": {
          "IP": "10.100.99.101",
          "MAC": "00:0a:XX:9F:XX:16",
          "Interfaces": [
            "nic-1", "nic-2", "nic-3"
          ]
        },
        "Hardware": {
          "Drive Bays": [
            "bay-1", "bay-2", "bay-3", "bay-4"
          ],
          "Cores": "24",
          "Memory": "256 GB"
        },
        "Storage": {
          "Type": "Object",
          "Vendor": "Some Vendor",
          "IOPS": "1000",
          "Size": "26 TB"
        }
      }
    }
    return (
      <div>
        <blockquote>
        <h3>Complex HTML table with multiple nested JSON attributes</h3>
        
        <p>An HTML table with multiple nested JSON attributes. &nbsp;<Link to="/">Back</Link></p><br />

        <JsonTable json={json}/>
        <br />

        <pre><code>
          import React from 'react';<br />
          import JsonTable from 'react-json-to-html';<br />
          <br />
          class Complex extends React.Component &#123;<br />
            &nbsp;&nbsp;const json = &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;"Server Name": "foo",<br />
            &nbsp;&nbsp;&nbsp;&nbsp;"Description": "bar",<br />
            &nbsp;&nbsp;&nbsp;&nbsp;"Date": "Jan 1, 2018"<br />
            &nbsp;&nbsp;&nbsp;&nbsp;"Specs": &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Network": &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"IP": "10.100.99.101",<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"MAC": "00:0a:XX:9F:XX:16",<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Interfaces": [<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"nic-1", "nic-2", "nic-3"<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Hardware": &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Drive Bays": [<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"bay-1", "bay-2", "bay-3", "bay-4"<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;] <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Cores": "24",<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Memory": "256 GB",<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Storage": &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Type": "Object",<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Vendor": "Some Vendor",<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"IOPS": "1000",<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Size": "26 TB",<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br />
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

export default Complex;
