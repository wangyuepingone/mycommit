import React from 'react';

export default class extends React.Component{
    constructor(props){
        super();
        this.username = React.createRef();
    }
    state = {
        index:0
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        let profile;
        let usernameStr = localStorage.getItem('users');
        let users = usernameStr?JSON.parse(usernameStr):[];
        let name = this.username.current.value;
        let arr=users.filter(item=> item.username ===name );
        arr.forEach(item => profile = item.username);
        if(name === profile && this.props.location.state){
            localStorage.setItem('login',JSON.stringify(profile));
            this.props.history.push(this.props.location.state.from)
        }else if(this.state.index >= 5){
            alert('sorry，您密码输入错误五次，请改天再登录');
            this.props.history.push('/error')
        }else{
            this.setState({index:this.state.index+1});
            alert('sorry,您的用户名输入错误')
        }
        this.props.history.push('/')
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" className="form-control" ref={this.username}/>
                <button type="submit" className="btn btn-primary">登录</button>
            </form>
        )
    }
}
