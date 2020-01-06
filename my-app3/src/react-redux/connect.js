import React,{ useEffect,useState,useContext } from 'react';
import ReactReduxContext from './context';
import { bindActionCreators } from '../redux'
/**
 * connect高阶函数的作用：
 * 1 从上下文中获取到Context
 * 2 执行mapStateToProps函数，获取到store.getState(),获取到仓库的数据状态，并且当做属性传值给渲染的组件
 * 3 负责订阅store状态的变化，当数据发生变化之后要及时的刷新页面更新数据
 * 4 把actions绑定到bindAction上，然后通过bindAction绑定的结果当做属性传给渲染的组件
 */

export default function(mapStateToProps,actions){
    return function(Counter){
        return function(props){
            let { store } = useContext(ReactReduxContext);
            let [state,setState] = useState(mapStateToProps(store.getState()));
            let [boundActions] = useState(()=> bindActionCreators(actions,store.dispatch));
            useEffect(()=>{
                return store.subscribe(()=>{
                    setState(mapStateToProps(store.getState()))
                })
            },[]);

            return <Counter {...state} {...boundActions}/>
        }
    }
}
