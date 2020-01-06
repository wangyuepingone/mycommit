export default function combineReducers(reducers){
    return function(state={},action){
        let nextState = {};
        for(let key in reducers){
            let reducerForkey = reducers[key];//counter1
            let prevState = state[key];//{number:0}
            let nextStateForkey = reducerForkey(prevState,action);
            nextState[key] = nextStateForkey
        }
        return nextState;
    }
}