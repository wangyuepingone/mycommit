import React from 'react';
import ReactDOM from 'react-dom';
class Clock extends React.Component{
    state = {number:0};
    constructor(props){
        super(props);
        this.state = {number:0};
    }
    render(){
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={()=>this.setState({number:this.state.number+1})}>+</button>
            </div>
        )
    }
}
let element = React.createElement(Clock, { id: 'title' });
console.log(element)
ReactDOM.render(element, document.getElementById('root'));