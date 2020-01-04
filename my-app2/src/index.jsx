import React from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router,Route} from './react-router-dom';
import Home from './component/Home'
import User from './component/User'
import Profile from './component/Profile'

/**
 * Router代表的是路由容器
 * Route代表的是路由匹配规则
 */
ReactDom.render(<Router>
    <Route exact={false} path="/" component={Home}></Route>
    <Route path="/user" component={User}></Route>
    <Route path="/profile" component={Profile}></Route>
    <Route></Route>
</Router>, document.getElementById('root'));