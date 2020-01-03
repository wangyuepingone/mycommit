import React from 'react';
import ReactDom from 'react-dom';
export interface ContextValue {
    color: any;
}
let ThemeContext = React.createContext<ContextValue | null>(null);

class Title extends React.Component{
    render(){
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
}
class Header extends React.Component{
    static ContextType = ThemeContext
    render(){
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
}
class Content extends React.Component{
    static ContextType = ThemeContext
    render(){
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
}

class Mian extends React.Component{
    static ContextType = ThemeContext
    render(){
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
}
class Panel extends React.Component{
    state = {color:'green'}
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