// function add1(str){
//     return '1'+str;
// }

// function add2(str){
//     return '2'+str;
// }

// function add3(str){
//     return '3'+str;
// }

// function compose(add1,add2,add3){
//     return function(str){
//         return add3(add2(add1(str)));
//     }
// }
export default function compose(...fns){
    return fns.reduce((a,b)=>{
        return function(...args){
            return a(b(...args))
        }
    })
}

// let composeFn = compose(add1,add2,add3);
// let result = composeFn('baiyan');
// console.log(result);