import React from 'react';
import routerContext from './context';

export default class extends React.Component{
    static contextType = routerContext;
    render(){
        //如果props上没有有from属性，只有to属性的话，那就直接跳转到to指定的路径上去
        //或者props.from等于当前路径对象上的路径，那么就直接跳转到to指定的路径上去
        //重定向判断只有两种情况可以跳转，第一是直接跳转到to属性上，第二是from等于了路径对象的路径时候可以直接跳转
        if(!this.props.from || this.props.from === this.context.location.pathname){
            this.context.history.push(this.props.to);
        }
        return null;
    }
}