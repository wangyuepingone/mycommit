import * as TYPES from '../action.types';

function increment(){
    return {type:TYPES.INCREMENT}
}

function decrement(){
    return {type:TYPES.DECREMENT}
}

function thunkAdd(){
    return function(dispatch,getState){
        setTimeout(()=>{
            dispatch({type:TYPES.INCREMENT})
        },1000)
    }
}
function promiseAdd(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve({type:TYPES.INCREMENT})
        },1000)
    })
}
export default{
    increment,
    decrement,
    thunkAdd,
    promiseAdd
}