import React from 'react';
import ReactDom from 'react-dom';

function withFormLocal(OldComponent,name){
    return class extends React.Component{
        state = {value:null};
        componentDidMount(){
            let value=localStorage.getItem(name);
            console.log(value)
            this.setState({value})
        }
        render(){
            return <OldComponent value={this.state.value}/>
        }
    }
}
function loadFormAjax(OldComponent){
    return class extends React.Component{
        state = {value:null};
        componentDidMount(){
            fetch('/transition.json').then(response=>response.json()).then(data=>{
                this.setState({value:data[this.props.value]})
            })
        }
        render(){
            return <OldComponent value = {this.state.value}/>
        }
    }
}
let Username = (props)=>{
    return  <input defaultValue={props.value}/>
}
let LoggerUsername = withFormLocal(Username,'username');
ReactDom.render(<div><LoggerUsername /></div>, document.getElementById('root'));