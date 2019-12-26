import React from 'react';

export class Panel extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="panel panel-default">
                <div className="panel-heading">头部</div>
                <div className="panel-body">主体</div>
                <div className="panel-footer">尾部</div>
            </div>
        )
    }
}