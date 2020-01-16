import React from 'react';
import RouterContext from './context';

export default class extends React.Component{
    static contextType = RouterContext;
    render(){
        let { when,message } = this.props;
        if(when){
            this.context.history.block(message);
        }else{
            this.context.history.unblock()
        }
        return null
    }
}