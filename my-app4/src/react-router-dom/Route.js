import React from 'react';
import RouterContext from './context';
import pathToRegexp from 'path-to-regexp';

export default class extends React.Component{
    static contextType = RouterContext
    render(){
        let { path,component:RouteComponent,exact} = this.props;
        //获取到上下文中传递过来的location
        let pathname = this.context.location.pathname;
        let paramsName = [];
        let regexp = pathToRegexp(path,paramsName,{end:exact});
        //如果是精准匹配，那么就看path和pathname是否一样，如果是一样就匹配当前的路径
        //如果不是精准匹配，那么就看以path开头的路径是否和pathname一样，如果一样就匹配，在这里首页也是可以匹配的
        if(regexp.test(pathname)){
            return<RouteComponent history={this.context.history}/>
        }
        return null;
    }
}