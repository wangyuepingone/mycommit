import React from 'react';

export default class extends React.Component{
    constructor(){
        super();
        this.username = React.createRef();
        this.email = React.createRef();
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        let username = this.username.current.value;
        let userStr = localStorage.getItem('users');
        let users = userStr?JSON.parse(userStr):[];
        users.push({id:Date.now()+'',username});
        localStorage.setItem('users',JSON.stringify(users));
        this.props.history.push('/user/list')
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input text="text" className="form-control" ref={this.username}/>
                <button text="submit" className="btn btn-primary">提交</button>
            </form>
        )
    }
}