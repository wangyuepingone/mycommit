import * as TYPES from '../action.types';

export let initialState = {number:0};
export default function(state=initialState,action){
    switch(action.type){
        case TYPES.INCREMENT:
            return {...state,number:state.number+1};
        case TYPES.DECREMENT:
            return {...state,number:state.number-1};
        default :
            return state
    }
}