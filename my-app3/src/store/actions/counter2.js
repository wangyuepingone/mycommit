import * as TYPES from '../action.types';

function increment2(){
    return {type:TYPES.INCREMENT2}
}

function decrement2(){
    return {type:TYPES.DECREMENT2}
}

export default{
    increment2,
    decrement2
}