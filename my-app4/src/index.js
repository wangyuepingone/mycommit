import React from 'react';
import ReactDOM from 'react-dom';

export default function Hello (){
    return (
        <div>hello world</div>
    )
}

ReactDOM.render(<Hello/>, document.getElementById('root'));