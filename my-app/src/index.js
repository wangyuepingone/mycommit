import React from './react';
import ReactDOM from './react-dom';
// import { Person } from './demo/6';

let element = React.createElement('h1',{id:'title'},React.createElement('span',null,'hello',
),React.createElement('span',null,'word'));
console.log(element)
ReactDOM.render(element,document.getElementById('root'));