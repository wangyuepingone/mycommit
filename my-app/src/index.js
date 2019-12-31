import React from 'react';
import ReactDOM from 'react-dom';


let element = React.createElement(Form, { id: 'title' });
console.log(element)
ReactDOM.render(element, document.getElementById('root'));