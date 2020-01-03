import React from 'react';
import ReactDom from 'react-dom';

function createContext(initialValue) {
    class Provider extends React.Component {
        static defaultProps = initialValue
        constructor(props) {
            super(props);
            this.state = {};
            Provider.defaultProps = props.value;
        }
        render() {
            return this.props.children
        }
    }
    class Consumer extends React.Component {
        render() {
            return this.props.children(Provider.defaultProps)
        }
        static getDerivedStateFromProps(nextProps, prevProps) {
            Provider.defaultProps = nextProps;
            return {}
        }
    }
    return {
        Provider,
        Consumer
    }
}
let ThemeContext = createContext(null);

class Title extends React.Component {
    static ValueContext = ThemeContext
    constructor(props) {
        super(props);
    }
    render() {
        this.context2 = Title.ValueContext.Provider.defaultProps;
        return (
            <div style={{ border: `5px solid ${this.context2.color}` }}>
                title
            </div>
        )
    }

}
class Header extends React.Component {
    static ValueContext = ThemeContext
    constructor(props) {
        super(props);
    }
    render() {
        this.context2 = Header.ValueContext.Provider.defaultProps;
        return (
            <div style={{ border: `5px solid ${this.context2.color}` }}>
                header
                <Title />
            </div>
        )
    }
}
class Content extends React.Component {
    static ValueContext = ThemeContext
    constructor(props) {
        super(props);
    }
    render() {
        this.context2 = Content.ValueContext.Provider.defaultProps;
        return (
            <div style={{ border: `5px solid ${this.context2.color}` }}>
                content
            </div>
        )
    }
}
class Mian extends React.Component {
    static ValueContext = ThemeContext
    constructor(props) {
        super(props);
    }
    render() {
        this.context2 = Mian.ValueContext.Provider.defaultProps;
        return (
            <div style={{ border: `5px solid ${this.context2.color}` }}>
                mian
                <Content />
            </div>
        )
    }
}

class Panel extends React.Component {
    state = { color: 'green' }
    render() {
        let value = { color: this.state.color }
        return (
            <ThemeContext.Provider value={value}>
                <div style={{ border: `5px solid ${this.state.color}`, width: 200 }}>
                    panel
                    <Header />
                    <Mian />
                </div>
            </ThemeContext.Provider>
        )
    }
}

ReactDom.render(<Panel />, document.getElementById('root'));