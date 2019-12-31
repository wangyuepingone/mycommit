class Username extends React.Component{
    constructor(props){
        super(props);
        this.inputRef = React.createRef();
    }
    render(){
        return (
            <input ref={this.inputRef}/>
        )
    }
}
class Parent extends React.Component{
    constructor(props){
        super(props);
        this.username = React.createRef();
    }
    getFocus=()=>{
        this.username.current.inputRef.current.focus()
    }
    render(){
        return (
            <>
                <Username ref={this.username}/>
                <button onClick={this.getFocus}>获取组件实例的dom节点</button>
            </>
        )
    }
}