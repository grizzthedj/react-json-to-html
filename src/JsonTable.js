import React from 'react';
import Css from './Css';
import JsonToHtml from './JsonToHtml';

class JsonTable extends React.Component {
  render() {
    const htmlTable = JsonToHtml.getTable(this.props.json);
    
    return (
      <div dangerouslySetInnerHTML={{__html: htmlTable}}></div>
    );
  }
}

export default JsonTable;