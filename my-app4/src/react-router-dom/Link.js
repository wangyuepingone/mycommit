import React from 'react';
import RouterContext from './context'
export default class extends React.Component{
    static contextType = RouterContext;
    render(){
        return (
            <a href={`/#${this.props.to}`} onClick={()=>this.context.history.push(this.props.to)}>{this.props.children}</a>
        )
    }
}