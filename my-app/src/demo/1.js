/**
 * 
 * react渲染的流程
 * 1 把所有的属性组合成为一个对象
 * 2 把属性对象作为参数传递给函数组件
 * 3 函数组件会返回一个React元素(虚拟dom)
 * 4 然后由ReactDOM.render方法把虚拟dom(React元素)转化为真实的dom元素插入到页面上去
 */
import React from 'react';
export function Welcome(props) {
    return (
        <div>
            hello{props.name}
            <span>world</span>
        </div>
    )
}