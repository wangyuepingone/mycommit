import React from 'react';
import ReactDOM from 'react-dom';

//react编译的时候会把<h1>hello word</h1>转换成为React.createElement('h1',null,'hello word')
// let element1 = (
//     <div>
//         <span>1</span>
//         <span>2</span>
//         <span>3</span>
//     </div>
// );
let spans = [
        <span>1</span>,
        <span>2</span>,
        <span>3</span>
]

// function map(children,fn){
//     return children.map(fn);
// }
let divs = spans.map((item,index)=> <div key={index}>{item}</div>)
let element2 = React.createElement('h1',null,'hello word');
//element2={type:'h1',props:{children:'hello word'}}
// console.log(element1)
ReactDOM.render(<div>{divs}</div>,document.getElementById('root'));