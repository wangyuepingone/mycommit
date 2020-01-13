import React from 'react';
import RouterContext from './context';
export default class extends React.Component{
    //获取到hash路径和路径状态
    state = {
        location:{
            pathname:window.location.hash.slice(1),
            state:window.history.state
        }
    }
    //监听hash路径变化，hash路径发生变化之后应该更新hash最新的路径覆盖旧的路径
    componentDidMount(){
        window.addEventListener('hashchange',(event)=>{
            this.setState({
                location:{
                    ...this.state.location,
                    pathname:window.location.hash.slice(1) || '/',
                    state:this.locationState
                }
            })
        });
        //将更新后的hash路径更新到window.location.hash，并且给一个默认值
        //因为我们在上面已经把window.location.hash进行特殊处理，所以必须还原回来
        window.location.hash = window.location.hash || '/'
    }
    //将最新的location,history,match放入routerValue这个对象里面
    //然后调用context把routerValue传到子组件的props中去，并且渲染子组件
    render(){
        let that = this;
        let history={
            location:this.state.location,
            push(to){
                //更改window.location.hash的路径会触发this.state,他会自动更新数据并且刷新页面
                if(typeof to === 'object'){
                    let {pathname,state} = to;
                    that.locationState = state;
                    window.location.hash = pathname;
                }else{
                    window.location.hash = to;
                }
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