import React from 'react';
import { Route,Redirect } from '../react-router-dom';

export default class extends React.Component{
    render(){
        let { path,component:RouteComponent } = this.props;
        return (
            <Route path={path} render={routerProps=>{
                return localStorage.getItem('login')?<RouteComponent {...routerProps}/>:
                <Redirect to={{pathname:'/login',state:{from:routerProps.location.pathname}}}/>
            }} />
        )
    }
}