import React from 'react';
import RouterContext from './context';
import { pathToRegexp } from 'path-to-regexp'
/**
 * 每一条Route代表一条匹配的规则
 * path属性代表是的当前定义的路径地址
 * component代表的是当前需要渲染的组件
 * 每一条Route都要拿当前定义的path和context上下文传递过来的path进行判断
 */
export default class Route extends React.Component {
    static contextType = RouterContext
    render() {
        let { exact, path, component: RouterComponent } = this.props;
        let pathname = this.context.location.pathname;
        let paramNames = [];
        let reg = pathToRegexp(path, paramNames, { end: exact });
        if (reg.test(pathname)) {
            return <RouterComponent />
        }
        return null
    }
}