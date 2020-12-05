import React from 'react';
import Css from './Css';
import JsonToHtml from './JsonToHtml';

class JsonTable extends React.Component {
  render() {
    const htmlTable = JsonToHtml.getTable(this.props.json, this.props.css, this.props.indent);
    
    return (
      <div dangerouslySetInnerHTML={{__html: htmlTable}}></div>
    );
  }
}

export default JsonTable;