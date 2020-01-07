import { createStore } from '../redux';
import reducer from './reducers/';

//logger是我们的中间件函数
function logger({dispatch,getState}){
    return function(next){
        return function(action){
            // console.log('旧状态',getState());
            // //如果有多个中间件的话，next会先执行其他的中间件，执行完毕之后再执行store.dispatch()方法派发
            // //next(action)会调用store.dispatch()方法派发一次请求来更新当前的状态
            //     next(action);
            // console.log('新状态',getState());

            if(action.type == 'DECREMENT'){
                setTimeout(()=>{
                        next(action);
                    if(getState().counter.number>0){
                        dispatch(action);
                    }
                },1000)
            }else{
                next(action)
            }
        }
    }
}

//实现中间件
function applyMiddleware(middleware){
    return function(createStore){
        return function(reducer){
            let store=createStore(reducer);
            let dispatch;
            //执行logger函数，并且传参，执行完毕之后把返回的结果给middleware(返回的结果也是一个函数)
            middleware = middleware({
                getState:store.getState,
                //这个dispatch他会先找上面dispatch变量，如果变量没有则会找到下面被修改过的dispatch
                dispatch:action=>dispatch(action)
            });
            //执行带next参数的函数，也就是middleware函数，并且把store.dispatch传到next函数中
            //把返回结果给dispatch
            dispatch = middleware(store.dispatch);
            return {
                ...store,
                dispatch
            }
        }
    }
}
let store = applyMiddleware(logger)(createStore)(reducer);
export default store;