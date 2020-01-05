
// let initialState = {color:'red',updateCount:0};
// let CHANGE_INIT = 'CHANGE_INIT';
// function reducer(state =initialState,action){
//     if(action.type === CHANGE_INIT){
//         return {
//             ...state,
//             color:action.payload,
//             updateCount:state.updateCount+1
//         }
//     }
//     return state
// }

export default function createStore(reducer,initialState){
    let state = initialState;
    let listeners = []
    function getState(){
        return state
    }
    function dispatch(action ){
        state = reducer(state,action);
        listeners.forEach(listener=>listener());
        return action;
    }
    dispatch({ type: '@@REDUX_INIT' });
    function subscribe(listener){
        listeners.push(listener);
        return function (){
            listeners.filter(item=>item !== listener);
        }
    }

    return {
        getState,
        dispatch,
        subscribe
    }
}

// let store = createStore(initialState);
// store.subscribe(()=>{
//     console.log(store.getState())
// })
// store.dispatch({type:CHANGE_INIT,payload:'yellow'})
