import React from 'react';
import ReactDom from 'react-dom';
interface ContextValue {
    color: any;
}
let ThemeContext = React.createContext<ContextValue | null>(null);

function Title(){
    return (
        <ThemeContext.Consumer>
        {
            (value: ContextValue | null) => (
                <div style={{ border: `5px solid ${value!.color}` }}>
                    title
                </div>
            )
        }
    </ThemeContext.Consumer>
    )
}
function Header(){
    return (
        <ThemeContext.Consumer>
        {
            (value: ContextValue | null) => (
                <div style={{ border: `5px solid ${value!.color}` }}>
                    header
                    <Title />
                </div>
            )
        }
        </ThemeContext.Consumer>
    )
}
function Content(){
    return (
        <ThemeContext.Consumer>
        {
            (value: ContextValue | null) => (
                <div style={{ border: `5px solid ${value!.color}` }}>
                    content
                </div>
            )
        }
        </ThemeContext.Consumer>
    )
}
function Mian(){
    return (
        <ThemeContext.Consumer>
        {
            (value: ContextValue | null) => (
                <div style={{ border: `5px solid ${value!.color}` }}>
                    mian
                    <Content />
                </div>
            )
        }
        </ThemeContext.Consumer>
    )
}

class Panel extends React.Component{
    state = {color:'blue'}
    render(){
        let value = {color:this.state.color}
        return (
            <ThemeContext.Provider value={value}>
                <div style={{border: `5px solid ${this.state.color}`,width:200}}>
                    panel
                    <Header/>
                    <Mian/>
            </div>
            </ThemeContext.Provider>
        )
    }
}

ReactDom.render(<Panel/>,document.getElementById('root'));