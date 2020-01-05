import React from 'react';
import ReactDom from 'react-dom';

function withComponent(OldComponent){
    return class extends React.Component{
        componentWillMount(){
            this.start = Date.now()
        }
        componentDidMount(){
            console.log((Date.now()-this.start)+'ms')
        }
        render(){
            return (
                <OldComponent/>
            )
        }
    }
}
class App extends React.Component{
    render(){
        return (
            <div>
                App
                {this.props.name}
            </div>
        )
    }
}

let LoggerApp  = withComponent(App);

ReactDom.render(<LoggerApp name="baiyan" />, document.getElementById('root'));