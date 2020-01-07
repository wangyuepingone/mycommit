import { createStore,compose } from '../redux';
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

function thunk({dispatch,getState}){
    return function(next){
        return function(action){
            if(typeof action == 'function'){
                action(dispatch,getState)
            }else{
                next(action)
            }
        }
    }
}

function promise({dispatch,getState}){
    return function(next){
        return function(action){
            if(typeof action.then == 'function'){
                action.then(dispatch);
            }else{
                next(action);
            }
        }
    }
}

//实现中间件
function applyMiddleware(...middlewares){
    return function(createStore){
        return function(reducer){
            let store=createStore(reducer);
            let dispatch;
            let middlewaresApi = {
                getState:store.getState,
                dispatch:action=>dispatch(action)
            }
            let chain = middlewares.map(middleware=>middleware(middlewaresApi));
            dispatch = compose(...chain)(store.dispatch);
            return {
                ...store,
                dispatch
            }
        }
    }
}
let store = applyMiddleware(logger,thunk,promise)(createStore)(reducer);
export default store;
