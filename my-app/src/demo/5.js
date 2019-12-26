
/**
 * 函数式编程之什么叫纯函数
 * 1 在函数体内部不能改变传入的参数
 * 2 相同的参数一定要返回相同的值
 * 3 不能改变作用域之外的值
 * 我们的函数组件就是一个纯函数
 */

 export function Withdraw(account,amount){
    account.pace -= amount;
 }
 Withdraw({name:'baiyan',pace:1000},100)