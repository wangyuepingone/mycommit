import React from 'react';
import RouterContext from './context';
import pathToRegexp from 'path-to-regexp';

export default class extends React.Component{
    static contextType = RouterContext;
     //如果是精准匹配，那么就看path和pathname是否一样，如果是一样就匹配当前的路径
     //如果不是精准匹配，那么就看以path开头的路径是否和pathname一样，如果一样就匹配，在这里首页也是可以匹配的
    render(){
        let { path="/",component:RouteComponent,exact=false} = this.props;
        //获取到上下文中传递过来的location
        let pathname = this.context.location.pathname;
        let paramsName = [];
        let regexp = pathToRegexp(path,paramsName,{end:exact});
        let result = pathname.match(regexp);

        //获取到paramsName数组中路径参数的key属性
        let paramsKeys = paramsName.map(item =>item.name);
        if(result){

            //url是匹配的路径地址，values是匹配之后路径参数的值
            let [url,...values] = result;
            //把values的路径参数赋值到paramsName的key属性上去，然后组合成为一个全新的对象，并且返回
            let params = values.reduce((memo,value,index)=>{
                memo[paramsKeys[index]] = value;
                return memo;
            },{});
            //每一次匹配成功路径的结果呈现
            let match={
                url,
                path,
                isExact:pathname === url,
                params,
            };
            
            //构建新的对象，把三个属性传给路由的props
            let RouterProps = {
                location:this.context.location,
                history:this.context.history,
                match
            }
            return<RouteComponent {...RouterProps}/>
        }
        return null;
    }
}