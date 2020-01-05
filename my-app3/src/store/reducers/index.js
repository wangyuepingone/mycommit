import { combineReducer } from '../../redux'
import counter1 from './counter1';
import counter2 from './counter2';

let reducers = {
    counter1,
    counter2
}
let combedReducers = combineReducer(reducers);
console.log(combedReducers)
export default combedReducers;