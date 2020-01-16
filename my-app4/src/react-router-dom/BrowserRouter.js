import React from 'react';
import RouterContext from './context';
export default class extends React.Component{
    //获取到hash路径和路径状态
    state = {
        location:{
            pathname:'/'
        }
    }
    //监听hash路径变化，hash路径发生变化之后应该更新hash最新的路径覆盖旧的路径
    componentDidMount(){
        window.onpushstate = (state,pathname)=>{
            this.setState({
                location:{
                    ...this.state.location,
                    pathname,
                    state
                }
            })
        }
        window.onpopstate = (event)=>{
            this.setState({
                location:{
                    ...this.state.location,
                    pathname:window.location.pathname,
                    state:event.state
                }
            })
        }
    }
    //将最新的location,history,match放入routerValue这个对象里面
    //然后调用context把routerValue传到子组件的props中去，并且渲染子组件
    render(){
        const globalHistory = window.history
        let history={
            location:this.state.location,
            push(to){
                if(history.message){
                    let target = typeof to === 'string' ?{pathname:to} :to;
                    let yes=window.confirm(history.message(target));
                    if(!yes) return;
                }
                //更改window.location.hash的路径会触发this.state,他会自动更新数据并且刷新页面
                if(typeof to === 'object'){
                    let {pathname,state} = to;
                    globalHistory.pushState(state,null,pathname);
                }else{
                    globalHistory.pushState(null,null,to);
                }
            },
            block(message){
                history.message = message
            },
            unblock(){
                history.message = null;
            }
        }
        let routerValue={
            location:this.state.location,
            history
        }
        return(
            <RouterContext.Provider value={routerValue}>
                {this.props.children}
            </RouterContext.Provider>
        )
    }
}