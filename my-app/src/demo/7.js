// class Calculation extends React.Component{

//     add = ()=>{
//         let num1 = parseInt(this.refs.num1.value);
//         let num2 = parseInt(this.refs.num2.value);
//         let result1 = num1+num2;
//         this.refs.result.value = result1
//     }
//     render(){
//         return (
//             <>
//                 <input ref="num1" /> + <input ref="num2" /> <button onClick={this.add}>=</button> <input ref="result" />
//             </>
//         )
//     }
// }

class Calculation extends React.Component{
    constructor(props){
        super(props)
        this.num1 = React.createRef();
        this.num2 = React.createRef();
        this.result = React.createRef();
    }
    add = () => {
        let num1 = parseInt(this.num1.current.value);
        let num2 = parseInt(this.num2.current.value);
        let result1 = num1+num2;
        this.result.current.value = result1;
    }
    render(){
        return (
            <>
                <input ref={this.num1} /> + <input ref={this.num2} /> <button onClick={this.add}>=</button> <input ref={this.result} />
            </>
        )
    }
}