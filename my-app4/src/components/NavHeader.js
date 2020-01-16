import React from 'react';
import { withRouter } from '../react-router-dom'

class NavHeader extends React.Component{
    render(){
        return (
            <div className="navbar-heading">
                <div 
                onClick={()=> this.props.history.push('/')}
                className="navbar-brand">百颜皓翎</div>
            </div>
         )
    }
}

export default withRouter(NavHeader)