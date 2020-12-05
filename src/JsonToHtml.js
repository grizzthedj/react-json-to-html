import Css from './Css';

var JsonToHtml = (function() {
  var html = '';
  var level = 0;
  var rootStyle = "";
  var suffix = '&nbsp;&nbsp;';
  var colspan = 2;
  var jsonObjOrig; 
  var subLevel = 0;
  var componentLevel = 0;
  var cssProp = {};
  var indentProp = 3;
  let trStyles = "";
  let tdStyles = "";
  let spacerStyles = "";
  let subElementStyles = "";
  let dataCellStyles = "";
  let rootElementStyles = "";

  var getTable = function(jsonObj, css, indent) {
    cssProp = css || {};
    indentProp = indent || 3;
    validateProps(jsonObj, cssProp, indentProp);
    trStyles = getStyleAttributes('jsonTr');
    tdStyles = getStyleAttributes('jsonTd');
    spacerStyles = getStyleAttributes('rowSpacer');
    subElementStyles = getStyleAttributes('subElement');
    dataCellStyles = getStyleAttributes('dataCell');
    rootElementStyles = getStyleAttributes('rootElement');
    jsonObjOrig = jsonObj;
    level = 0;
    html = '<table>';
    walkTheDog(jsonObj);
    html += '</table>';
    return html;
  };

  var validateProps = function(jsonObj, css, indent) {
    if (!Number.isInteger(indent) || Math.sign(indent) !== 1) {
      throw "The indent prop must be a positive number"
    }
    if (typeof css !== 'object' || css === null || Array.isArray(css)) {
      throw "The css prop must be an object(but not an array)"
    }
    if (typeof jsonObj !== 'object' || jsonObj === null || Array.isArray(jsonObj)) {
      throw "The json prop must be an object(but not an array)"
    }
  }

  var getIndent = function(level) {
    var indent = '&nbsp;'; 
    const singleIndent = [...Array(indentProp)].map((_, i) => "&nbsp;").join("")

    for (var i=0; i<level; i++) {
      indent += singleIndent;
    }

    return indent;
  }

  var getSpacer = function() {
    return '<tr style="' + spacerStyles + '"></tr>';
  }

  // Get the Css obj from Css.js(or from props if present), and return a semicolon 
  // separated list of styles
  var getStyleAttributes = function(className) {
    const defaultCssObj = Css[className];
    const defaultKeys = Object.keys(defaultCssObj);
    var attributes = "";

    for(var i=0; i<defaultKeys.length; i++) {
      const key = defaultKeys[i];
      const cssAttr = key.replace(/([A-Z])/g, "-$1").toLowerCase(); 
      var cssClass = (cssProp[className] && cssProp[className][key]) ? cssProp[className] : defaultCssObj;
      attributes += cssAttr + ":" + cssClass[key] + ";";
    }

    return attributes;
  }

  var processArray = function(arr) {
    var distKeys = [];
    var html = '';

    if (Array.isArray(arr) && arr.length === 0) {
      return html;
    }

    // Get distinct keys from first obj
    // TODO: Handle unstructured objects in array. Assumption, for now, is that
    // all objects in array will have same structure.
    if (typeof arr[0] === 'object') {
      // Render the props if only a single object in the array 
      if (arr.length === 1) {
        for (var k in arr[0]) {
          var value = "";

          if (arr[0][k]) {
            value = arr[0][k].toString();
          }

          html += '<tr style="' + trStyles + '">';
          html += '  <td style="' + subElementStyles + '">' + getIndent(level) + k + suffix + '</td>';
          html += '  <td style="' + dataCellStyles + '">' + getIndent(level) + value + suffix + '</td>';
          html += '</tr>';
          html += getSpacer();
        }
      }
      else {
        html = '<tr style="' + trStyles + '">';

        for (var k in arr[0]) {
          distKeys.push(k);
          html += '<td style="' + subElementStyles + '">';
          html +=   getIndent(level) + k + suffix
          html += '</td>';
        }

        html += '</tr>';
        html += getSpacer();

        // Render a row for each obj, displaying the value for each distinct key
        for (var k in arr) {
          html += '<tr style="' + trStyles + '">';

          for (var i=0; i<distKeys.length; i++) {
            html += '<td style="' + dataCellStyles + '">';
            html +=   getIndent(level) + arr[k][distKeys[i]] + suffix;
            html += '</td>';
          }

          html += '</tr>';
          html += getSpacer();
        }
      }
    }

    // Render a <tr> and <td> for each string in an array
    if (typeof arr[0] === 'string') {
      for (var k in arr) {
        html += '<tr style="' + trStyles + '">';
        html += '  <td style="' + dataCellStyles + '" colspan="2">';
        html +=      getIndent(level) + arr[k] + suffix;
        html += '  </td>';
        html += '</tr>';
      }
    }

    return html;
  };

  var walkTheDog = function(jsonObj) {
    var hasArray = false;

    if (typeof jsonObj === 'string') {
      jsonObj = JSON.parse(jsonObj);
    }

    subLevel = level;

    for (var k in jsonObj) {
      // Reset the indent if next element is root
      if (typeof jsonObjOrig[k] !== 'undefined') {
        level = 0;
        rootStyle = rootElementStyles;
      }
      else {
        rootStyle = subElementStyles;
      }
      
      componentLevel = subLevel;

      if (jsonObj.hasOwnProperty(k)) {
        var v = jsonObj[k];
        
        if (hasArray) {
          level = componentLevel;
        }

        if (typeof v === 'object') {
          colspan += level; 

          html += '<tr style="' + trStyles + '">';
          html += '  <td style="' + rootStyle + '" colspan="3">';
          html +=      getIndent(level) + k + suffix;
          html += '  </td>';
          html += '</tr>';
          html += getSpacer();

          level += 1;
        }
        else {
          var style = tdStyles + dataCellStyles;

          html += '<tr style="' + trStyles + '">';
          html += '  <td style="' + rootStyle + '">';
          html +=      getIndent(level) + k + suffix;
          html += '  </td>';
          html += '  <td style="' + style + '" colspan="2">' + v + '</td>';
          html += '</tr>';
          html += getSpacer();
        }
       
        if (v instanceof Array) {
          html += processArray(v);
          hasArray = true;
        }

        if (typeof v === 'object' && !(v instanceof Array)) {
          walkTheDog(v);
          level = subLevel - 1; // Outdent back 
        }
      }
    } 
  };

  return {
    getTable: getTable
  }

})();

export default JsonToHtml;
