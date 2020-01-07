import compose from './compose'
export default function applyMiddleware(...middlewares){
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