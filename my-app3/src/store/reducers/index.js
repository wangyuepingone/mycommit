import { combineReducer } from '../../redux'
import counter1 from './counter1';
import counter2 from './counter2';
import counter from './counter';
let reducers = {
    counter1,
    counter2,
    counter
}
let combedReducers = combineReducer(reducers);
export default combedReducers;