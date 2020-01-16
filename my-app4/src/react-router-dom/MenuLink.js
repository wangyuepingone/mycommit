import React from 'react';
import { Route,Link} from '../react-router-dom';

export default class extends React.Component{
    render(){
        let { to,children,exact } = this.props
        return (
            <Route
            exact={exact}
            path={typeof to === 'string'?to:to.pathname}
            children={
                routerProps=>(
                    <Link to={to} className={
                        routerProps.match && (!exact || (exact && routerProps.match.isExact))?'active':''
                    }>{children}</Link>
                )
            }
            />
        )
    }
}