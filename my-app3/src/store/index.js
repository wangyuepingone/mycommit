import { createStore } from '../redux';
import reducer from './reducers/';

//logger是我们的中间件使用的函数
function logger({dispatch,getState}){
    return function(next){
        return function(action){
            console.log('旧状态',getState());
            //如果有多个中间件的话，next会先执行其他的中间件，执行完毕之后再执行store.dispatch()方法派发
            //next(action)会调用store.dispatch()方法派发一次请求来更新当前的状态
            next(action);
            console.log('新状态',getState());
        }
    }
}

function applyMiddleware(middleware){
    return function(createStore){
        return function(reducer){
            let store=createStore(reducer);
            let dispatch;
            middleware = middleware({
                getState:store.getState,
                dispatch:action=>dispatch(action)
            });
            dispatch = middleware(store.dispatch);
            return {
                ...store,
                dispatch
            }
        }
    }
}
let store = applyMiddleware(logger)(createStore)(reducer)
export default store;