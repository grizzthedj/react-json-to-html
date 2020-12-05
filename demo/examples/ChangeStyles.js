import React from 'react';
import { Link } from 'react-router-dom';
import JsonTable from '../../src/JsonTable';

class ChangeStyles extends React.Component {
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

    const font = 'Courier';
    const cssAsJs = {
      jsonTr: {
        height: '25px'
      },
      jsonTd: {
        padding: '5px',
        borderSpacing: '0px',
        borderRadius: '0px'
      },
      rowSpacer: {
        height: '0px'
      },
      rootElement: {
        padding: '5px',
        borderSpacing: '0px',
        backgroundColor: '#80bfff',
        fontWeight: 'bold',
        fontFamily: font,
        borderRadius: '0px'
      },
      subElement: {
        padding: '5px',
        borderSpacing: '0px',
        backgroundColor: '#b3d9ff',
        fontWeight: 'bold',
        fontFamily: font,
        borderRadius: '0px'
      },
      dataCell: {
        borderSpacing: '0px',
        backgroundColor: '#e6f2ff',
        fontFamily: font,
        borderRadius: '0px'
      }
    }

    return (
      <div>
        <blockquote>
        <h3>Nested HTML table with CSS prop override</h3>
        
        <p>An HTML table with nested JSON attributes, and CSS override via Css prop. &nbsp;<Link to="/">Back</Link></p><br />

        <JsonTable json={json} css={cssAsJs}/>
        <br />

        <pre><code>
          import React from 'react';<br />
          import JsonTable from 'react-json-to-html';<br />
          <br />
          class ChangeStyles extends React.Component &#123;<br />
            &nbsp;&nbsp;const json = &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;"Server Name": "foo",<br />
            &nbsp;&nbsp;&nbsp;&nbsp;"Description": "bar",<br />
            &nbsp;&nbsp;&nbsp;&nbsp;"Specs": &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"IP": "10.100.99.101",<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"MAC": "00:0a:XX:9F:XX:16"<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;"Date": "Jan 1, 2018"<br />
            &nbsp;&nbsp;&#125;<br />
            &nbsp;&nbsp;const font = "Verdana";<br />
            &nbsp;&nbsp;const cssAsJs = &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;jsonTr: &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: '25px'<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;jsonTd: &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;padding: '5px',<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;borderSpacing: '0px',<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;borderRadius: '0px'<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;rowSpacer: &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height: '0px'<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;rootElement: &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;padding: '5px',<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;borderSpacing: '0px',<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backgroundColor: '#80bfff',<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fontWeight: 'bold',<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fontFamily: font,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;borderRadius: '0px'<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;subElement: &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;padding: '5px',<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;borderSpacing: '0px',<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backgroundColor: '#b3d9ff',<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fontWeight: 'bold',<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fontFamily: font,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;borderRadius: '0px'<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;dataCell: &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;borderSpacing: '0px',<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;backgroundColor: '#e6f2ff',<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fontFamily: font,<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;borderRadius: '0px'<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&#125;<br />
            &nbsp;&nbsp;&#125;<br />
            &nbsp;&nbsp;render() &#123;<br />
            &nbsp;&nbsp;&nbsp;&nbsp;return (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;JsonTable json=&#123;json&#125; css=&#123;cssAsJs&#125; /&gt;<br />
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

export default ChangeStyles;
