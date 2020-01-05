import React,{ useState,useEffect } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux'
import store from './store';
import actions from './store/actions'
let bindActions = bindActionCreators(actions,store.dispatch)
// export default class Counter extends React.Component{
//     state = { number:store.getState().number}
//     componentDidMount(){
//         store.subscribe(()=>{
//             this.setState({ number:store.getState().number})
//         })
//     }
//     componentWillUnmount(){
//         this.unSubscribe()
//     }
//     render(){
//         return (
//             <div>
//                 <p>{this.state.number}</p>
//                 <button onClick={()=>store.dispatch({type:TYPES.INCREMENT})}>+1</button>
//                 <button onClick={()=>store.dispatch({type:TYPES.DECREMENT})}>-1</button>
//             </div>
//         )
//     }
// }

export default function Counter(){
    let [number,setNumber] = useState(store.getState().number);
    useEffect(()=>{
        return store.subscribe(()=>{
            setNumber(store.getState().number)
        })
    },[])
    return (
        <div>
            <p>{number}</p>
            <button onClick={()=>bindActions.increment()}>+1</button>
            <button onClick={()=>bindActions.decrement()}>-1</button>
        </div>
    )
}
ReactDOM.render(<Counter />,document.getElementById('root'))
