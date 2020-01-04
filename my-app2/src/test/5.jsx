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
                {this.props.children(this.state)}
            </div>
        )
    }
}
ReactDom.render(<div>
    <MouseTracker>
       {
           props=>(
            <>
                <h1>请移动你的鼠标</h1>
                <p>当前鼠标的位置 x={props.x} y={props.y}</p>
            </>
           )
       }
    </MouseTracker>
</div>, document.getElementById('root'));