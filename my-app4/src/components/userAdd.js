import React from 'react';
import { Promt } from '../react-router-dom';

export default class extends React.Component{
    constructor(){
        super();
        this.username = React.createRef();
        this.email = React.createRef();
        //isBlock是否阻止跳转
        this.state = {
            isBlock:false
        }
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        this.setState({isBlock:!this.state.isBlock},()=>{
            let username = this.username.current.value;
            let userStr = localStorage.getItem('users');
            let users = userStr?JSON.parse(userStr):[];
            users.push({id:Date.now()+'',username});
            localStorage.setItem('users',JSON.stringify(users));
            this.props.history.push('/user/list')
        });
    }

    handleChange = (event)=>{
        this.setState({isBlock:event.target.value.length>0?true:false});
    }
    render(){
        return (
            <>
                <Promt when={this.state.isBlock} message={location=> `您确定要跳转到${location.pathname}吗？`}/>
                <form onSubmit={this.handleSubmit}>
                    <input text="text" className="form-control" onChange={this.handleChange} ref={this.username}/>
                    <button text="submit" className="btn btn-primary">提交</button>
                </form>
            </>
        )
    }
}