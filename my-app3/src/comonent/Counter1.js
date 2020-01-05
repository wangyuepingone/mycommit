import React,{ useState,useEffect } from 'react';
import { bindActionCreators } from '../redux'
import store from '../store';
import actions from '../store/actions/counter1'
let bindActions = bindActionCreators(actions,store.dispatch);

export default function(){
    let [number,setNumber] = useState(store.getState().counter1.number);
    useEffect(()=>{
        return store.subscribe(()=>{
            setNumber(store.getState().counter1.number)
        })
    },[])
    return (
        <div>
            <p>{number}</p>
            <button onClick={()=>bindActions.increment1()}>+1</button>
            <button onClick={()=>bindActions.decrement1()}>-1</button>
        </div>
    )
}