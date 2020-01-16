import React from 'react';
import { Route,Link,MenuLink } from '../react-router-dom';
import userList from './userList';
import userAdd from './userAdd';
import userDetail from './userDetail';

export default class extends React.Component{
    
    render(){
        return (
            <div className="row">
                <div className="col-md-2">
                    <ul className="nav nav-stack" style={{color:'#fff'}}>
                        <li><MenuLink to="/user/list">用户列表</MenuLink></li>
                        <li><MenuLink to="/user/add">用户添加</MenuLink></li>
                    </ul>
                </div>
                <div className="col-md-10">
                    <Route path="/user/list" component={userList}/>
                    <Route path="/user/add" component={userAdd}/>
                    <Route path="/user/detail/:id" component={userDetail}/>
                </div>
            </div>
        )
    }
}