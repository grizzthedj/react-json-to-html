# react-json-to-html

[![npm version](https://badge.fury.io/js/react-json-to-html.svg)](https://badge.fury.io/js/react-json-to-html)

A simple React component that renders and HTML table from a JSON object.

## Installation

```js
npm install react-json-to-html --save
```

## Usage

A simple example. Download and run the demo for more examples, or browse the [examples here]( http://grizzthedj.github.io/react-json-to-html/demo/public).

![alt tag](https://cloud.githubusercontent.com/assets/9720835/22619923/7ddd5d42-eacd-11e6-9bda-ee9be66cb64b.png)

```js
import React from 'react';
import JsonTable from 'react-json-to-html';


export default JsonTable;
```
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

