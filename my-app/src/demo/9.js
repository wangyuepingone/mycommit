function Username(props,ref){
    return (
        <input ref={ref}/>
    )
}
Username = React.forwardRef(Username)
class Form extends React.Component{
    constructor(props){
        super(props);
        this.username = React.createRef();
    }
    getFocus = ()=>{
        this.username.current.focus();  
    }
    render(){
        return (
            <>
                <Username ref={this.username}/>
                <button onClick={this.getFocus}>获取函数组件的dom</button>
            </>
        )
    }
}