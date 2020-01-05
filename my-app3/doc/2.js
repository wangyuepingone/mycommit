import { createStore } from './redux/index'

let initialState={number:0};
let INCREMENT = 'INCREMENT';
let DECREMENT = 'DECREMENT';
function reducer(state = initialState,action){
    switch(action.type){
        case INCREMENT :
            return {...state,number:state.number+1};
            break;
        case DECREMENT :
            return {...state,number:state.number-1};
            break;
        default:
            return state
    }
}
let store = createStore(reducer,initialState)
let root = document.getElementById('root');
let increment = document.getElementById('increment');
let decrement = document.getElementById('decrement');
let render = ()=>{
    root.innerHTML = store.getState().number
}
store.subscribe(render)

increment.addEventListener('click',()=>{
    store.dispatch({type:INCREMENT})
})

decrement.addEventListener('click',()=>{
    store.dispatch({type:DECREMENT})
})



