import React,{ useState,useEffect,useContext } from 'react';
import { connect } from '../react-redux';
import actions from '../store/actions/counter2'

 function Counter2(props){
    return (
        <div>
            <p>{props.number}</p>
            <button onClick={props.increment}>+1</button>
            <button onClick={props.decrement}>-1</button>
        </div>
    )
}
let mapStateToProps = state=>state.counter2;
let mapDispatchToProps = actions;
export default connect(mapStateToProps,mapDispatchToProps)(Counter2)