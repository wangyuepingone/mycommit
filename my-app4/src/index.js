import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Switch,Redirect,MenuLink } from './react-router-dom'
import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';
import Error from './components/Error';
import Private from './components/Private';
import Login from './components/login';
import NavHeader from './components/NavHeader';
import './components/index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Router>
    <>
        <div className="navbar navbar-inverse">
            <div className="container-fluid">
                <NavHeader />
                <ul className="nav navbar-nav">
                    <li><MenuLink exact={true} to="/">Home</MenuLink></li>
                    <li><MenuLink to="/user">User</MenuLink></li>
                    <li><MenuLink to="/profile">Profile</MenuLink></li>
                    <li><MenuLink to="/error"></MenuLink></li>
                </ul>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/user" component={User}/>
                        <Private path="/profile" component={Profile}/>
                        <Route path="/error" component={Error}/>
                        <Route path="/login" component={Login}/>
                        <Redirect to="/error" />
                    </Switch>
                </div>
            </div>
        </div>
    </>
</Router>, document.getElementById('root'));