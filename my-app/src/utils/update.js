// let state = {number:0};
// let updateQueue = [];
// function setState(newState){
//     updateQueue.push(newState)
// }

// setState({number:state.number+1});
// setState({number:state.number+1});
// setState({number:state.number+1});

// updateQueue.forEach(newState => state = newState);
// console.log(state);

class Component {
    constructor() {
        this.state = { number: 0 };
        //存放setState状态的数组
        this.updateQueue = [];
        //存放setState状态的回调函数
        this.callbackQueue = [];
        //批量更新控制标识符
        this.batchUpdate = false;
    }

    setState(stateFn, callbackUpdate) {
        //把setState状态的函数或者对象添加到数组队列中去
        //如果是批量更新的是函数(多次调用setState)就进行累加操作
        //如果是批量更新的是对象(多次调用setState)就进行调用setState函数操作，只执行一次；
        if (this.batchUpdate) {
            this.updateQueue.push(stateFn);
            this.callbackQueue.push(callbackUpdate)
        }else{
            if(typeof stateFn === 'function'){
                this.state = stateFn(this.state);
            }else{
                this.state = stateFn
            }
        }
    }
    flechUpdate() {
        //获取this。state状态，然后遍历循环this.state传入更新的函数中去然后进行处理操作
        //如果有多次调用，则将所有的更新函数全部执行完毕，然后把更新后的状态返回到this.state中去
        //最后执行callback回调函数，如果有批量更新的操作，则把批量更新的状态设置为false；
        let state = this.state;
        for (let i = 0; i < this.updateQueue.length; i++) {
            state = this.updateQueue[i](state);
        }
        this.state = state;
        this.callbackQueue.forEach(callback => callback());
        this.batchUpdate = false;
        console.log(this.state);
    }

    add() {
        this.batchUpdate = true;
        this.setState((states) => ({ number: states.number + 1 }), () => {
            console.log(1, this.state);
        });
        this.setState((states) => ({ number: states.number + 2 }), () => {
            console.log(2, this.state);
        })
        this.setState((states) => ({ number: states.number + 3 }), () => {
            console.log(3, this.state);
        })
        this.flechUpdate()
    }
}

let c = new Component();
c.add();
