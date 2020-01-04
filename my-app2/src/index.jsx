import React from 'react';
import ReactDom from 'react-dom';
class MouseTracker extends React.Component{
    state = {x:0,y:0};
    handleMouseMove = (event)=>{
        this.setState({
            x:event.pageX,
            y:event.pageY
        })
    }
    render(){
        return (
            <div onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        )
    }
}
function withMouseTracker(OldComponent){
    return props=>(
        <MouseTracker render={props => <OldComponent {...props}/>}/>
    )
}
let App = props=>(
    <>
        <h1>请移动你的鼠标</h1>
        <p>当前鼠标的位置 x={props.x} y={props.y}</p>
    </>
)
let WithMouseTrackerApp = withMouseTracker(App);

ReactDom.render(<div>
    <WithMouseTrackerApp />
</div>, document.getElementById('root'));