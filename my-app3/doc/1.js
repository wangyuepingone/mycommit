
let initialState = {color:'red',updateCount:0};
let CHANGE_COLOR = 'CHANGE_COLOR';
function reducer(state=initialState,action){
    if(action.type === CHANGE_COLOR){
        return {...state,color:action.payload,updateCount:state.updateCount+1};
    }
    return state
}

function createStore(reducer,initialState){
    let state=initialState;
    let listeners = []
    function getState(){
        return state
    }
    function dispatch(action){
        state = reducer(state,action);
        listeners.forEach(listener=>listener());
    }
    function subscribe(listener){
        listeners.push(listener);
        return function(){
            // let index = listeners.indexOf(listener);
            // listeners.splice(index,1);
            listeners.filter(item => item !== listener);
        }
    }
    return {
        getState,
        dispatch,
        subscribe  
    }
}
let store = createStore(reducer,initialState);
console.log(store.getState())
store.subscribe(()=>{
    console.log(store.getState())
})

console.log(store.dispatch({type:CHANGE_COLOR,payload:'green'}));
console.log(store.dispatch({type:CHANGE_COLOR,payload:'yellow'}));
console.log(store.dispatch({type:CHANGE_COLOR,payload:'black'}));

