# react-json-to-html

[![npm version](https://badge.fury.io/js/react-json-to-html.svg)](https://badge.fury.io/js/react-json-to-html)

A simple React component that renders an HTML table from a JSON object.

## Installation

```js
npm install react-json-to-html --save
```

## Usage

A simple example. Download and run the demo for more examples, or browse the [examples here]( http://grizzthedj.github.io/react-json-to-html/demo/public).

```js
import React from 'react';
import {JsonTable} from 'react-json-to-html';

class Nested extends React.Component {
  const json = {
    "Server Name": "foo",
    "Description": "bar",
    "Specs": {
      "IP": "10.100.99.101",
      "MAC": "00:0a:XX:9F:XX:16"
    },
    "Date": "Jan 1, 2018"
  }
  render() {
    return (
      <JsonTable json={json} />
    )
  }
}

export default JsonTable;
```
![alt tag](https://user-images.githubusercontent.com/9720835/35484781-f5faabd0-0422-11e8-9144-b622394f96a1.png)


## JsonTable props
| Name         | Type     | Required | Default                 | Possible Values              | Description     |
| ------------ | -------- | -------- | ----------------------- | ---------------------------- | --------------- |
| json         | [Object] | Yes      | undefined               | Any valid JSON object        | The JSON that will get rendered as HTML table |
 

## Download Examples

```js
git clone https://github.com/grizzthedj/react-json-to-html.git
cd react-json-to-html
npm install
gulp demo
Browse http://localhost:8080
```

## Backlog
1. Add more props to control styling and CSS
2. More tests
