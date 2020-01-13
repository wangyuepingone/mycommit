import React from 'react';
import routerContext from './context';
import pathToRegexp from 'path-to-regexp';

export default class extends React.Component{
    static contextType = routerContext;
    render(){
        let pathname = this.context.location.pathname;
        let children = this.props.children;
        children = Array.isArray(children)?children:[children];
        for(let i=0;i<children.length;i++){
            let child = children[i];
            //此时的child会变成React.createElement(Route,{exact,path,component});
            //然后被虚拟dom渲染成{type:Route,props:{exact,path,component}}
            //所以在这里我们结构出来的child.props实际上就是{type:Route,props:{exact,path,component}}
            let { path='/',exact=false } = child.props;
            //当前exact如果不传，那就undefined，此时在对象中的end会默认精准匹配，把exact激活为true
            //所以为了统一不让精准匹配，那就得先给exact一个默认值为false
            let regexp = pathToRegexp(path,[],{end:exact});
            let matched = pathname.match(regexp);
            //如果匹配成功，就只渲染当前匹配成功的this.props.children，然后跳出循环结束
            if(matched){
                return child;
            }
        }
        return null;
    }
}