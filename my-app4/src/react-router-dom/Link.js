import React from 'react';
import RouterContext from './context'
export default class extends React.Component{
    static contextType = RouterContext;
    render(){
        return (
            <a href={
                `/#${typeof this.props.to === 'string'?this.props.to:this.props.to.pathname}`
            } onClick={()=>this.context.history.push(this.props.to)}>{this.props.children}</a>
        )
    }
}