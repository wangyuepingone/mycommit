import React from 'react';
import actions from '../store/actions/counter';
import { connect } from 'react-redux';
function Counter(props){
    return (
        <div>
            <p>{props.number}</p>
            <button onClick={props.increment}>+1</button>
            <button onClick={props.decrement}>-1</button>
            <button onClick={props.thunkAdd}>22</button>
            <button onClick={props.promiseAdd}>promiseAdd</button>
        </div>
    )
};
let mapStateToProps = state=>state.counter;
let mapDispatchToProps = actions;
export default connect(mapStateToProps,mapDispatchToProps)(Counter)