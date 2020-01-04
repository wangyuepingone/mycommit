import React from 'react';
import RouterContext from './context';

export default class HashRouter extends React.Component{
    state = {
        location:{
            pathname:window.location.hash.slice(1),
            state:window.history.state || null
        }
    }
    componentDidMount(){
        window.addEventListener('hashchange',event=>{
            this.setState({
                location:{
                    ...this.state.location,
                    pathname:window.location.hash.slice(1)
                }
            })
        })
        window.location.hash = window.location.hash || '/';
    }
    render(){
        let routerValue = {
            location:this.state.location
        }
        return (
            <RouterContext.Provider value={routerValue}>
                {this.props.children}
            </RouterContext.Provider>
        )
    }
}