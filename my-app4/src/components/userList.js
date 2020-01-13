import React from 'react';
import { Link } from '../react-router-dom';

export default class extends React.Component{
    state = {
        users:[]
    }
    componentDidMount(){
         let username = localStorage.getItem('users');
         let users = username?JSON.parse(username):[];
         this.setState({users});
    }
    render(){
        return (
            <ul className="list-group">
                {
                    this.state.users.map((user)=>{
                        return (
                            <li className="list-group-item" key={user.id}>
                                <Link to={{pathname:`/user/detail/${user.id}`,state:user}}>{user.username}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}