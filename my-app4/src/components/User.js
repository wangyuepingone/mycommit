import React from 'react';
import { Route,Link } from '../react-router-dom';
import userList from './userList';
import userAdd from './userAdd';
import userDetail from './userDetail';

export default class extends React.Component{
    
    render(){
        return (
            <div className="row">
                <div className="col-md-2">
                    <ul className="nav nav-stack">
                        <li><Link to="/user/list">用户列表</Link></li>
                        <li><Link to="/user/add">用户添加</Link></li>
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