import React from 'react';

export default class extends React.Component{
    state = {
        user:{}
    }
    componentDidMount(){
        //在当前this.props.location.state取出users属性，但是他有一个缺点，那就是只要一刷新，他的数据就会丢失
        //为了防止刷新丢失数据，所以还需要到localStorage中拿去数据，这样刷新就不会丢失数据了
        //hash路由是基于原生的hash实现的，所以他并没有state属性
        //browhistory是基于window.history实现的，他可以存储state状态
        let user = this.props.location.state;
        
        if(!user){
            let userStr = localStorage.getItem('users');
            let users = userStr?JSON.parse(userStr):[];
            //users的id和this.props.match.params.id如果匹配成功，那就会把对应的users对象返回给user
            user = users.find((item)=>item.id === this.props.match.params.id);
        }
        if (user) this.setState({ user });
    }
    render(){
        return (
            <div>
                 <p>id：{this.state.user.id}</p>
                 <p>用户名：{this.state.user.username}</p>
            </div>
        )
    }
}