import React from './react';
import ReactDOM from './react-dom';
// import { Person } from './demo/6';

// let element = React.createElement('h1', { id: 'title' }, React.createElement('span', { style: { color: 'red',backgroundColor:'yellow' } }, 'hello',
// ), React.createElement('span', { className: 'baiyan' }, 'world'));
// function Welcome(props){
//     return (
//         <h1 id={props.id}>
//             <span>hello</span>
//             <span>world</span>
//         </h1>
//     )
// }

class Welcome extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <h1 id={this.props.id}>
              <span>hello</span>
              <span>world</span>
            </h1>
        )
    }
}
let element = React.createElement(Welcome, { id: 'title' });
console.log(element)
ReactDOM.render(element, document.getElementById('root'));