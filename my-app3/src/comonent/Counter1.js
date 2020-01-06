import React,{ useState,useEffect,useContext } from 'react';
import actions from '../store/actions/counter1';
import { connect } from '../react-redux';

function Counter1(props){
    return (
        <div>
            <p>{props.number}</p>
            <button onClick={props.increment}>+1</button>
            <button onClick={props.decrement}>-1</button>
        </div>
    )
}
let mapStateToProps = state=> state.counter1;
let mapDispatchToProps = actions;
export default connect(mapStateToProps,mapDispatchToProps)(Counter1)