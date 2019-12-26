import React from 'react';
export class Welcome extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                hello {this.props.name}
            </div>
        )
    }
}