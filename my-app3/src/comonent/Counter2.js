import React,{ useState,useEffect } from 'react';
import { bindActionCreators } from '../redux'
import store from '../store';
import actions from '../store/actions/counter2'
let bindActions = bindActionCreators(actions,store.dispatch);

export default function(){
    let [number,setNumber] = useState(store.getState().counter2.number);
    useEffect(()=>{
        return store.subscribe(()=>{
            setNumber(store.getState().counter2.number)
        })
    },[])
    return (
        <div>
            <p>{number}</p>
            <button onClick={()=>bindActions.increment2()}>+1</button>
            <button onClick={()=>bindActions.decrement2()}>-1</button>
        </div>
    )
}