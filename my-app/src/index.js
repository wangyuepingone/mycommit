import React from 'react';
import ReactDOM from 'react-dom';
import { Person } from './demo/6';

let personProp = {
    age:38,
    gender:'male',
    hobby:['baskeball','football'],
    position:{x:10,y:10},
    friends:[{name:'zhangsan',age:28},{name:'lisi',age:18}]
}
let element = React.createElement(Person,{...personProp});

ReactDOM.render(element,document.getElementById('root'));