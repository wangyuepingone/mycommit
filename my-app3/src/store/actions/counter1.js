import * as TYPES from '../action.types';

function increment1(){
    return {type:TYPES.INCREMENT1}
}

function decrement1(){
    return {type:TYPES.DECREMENT1}
}

export default{
    increment1,
    decrement1
}