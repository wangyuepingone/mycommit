import React, { useState } from 'react';
/**
 * d当要渲染的时候回去执行这个函数，拿到return的React元素(虚拟dom)，然后返回真实的dom插入页面进行渲染；
 */
export function Clock(){
    let [count,setState] = useState(0);
    return (
        <div>
            <span>{count}</span>
            <button onClick={()=> setState(count+1)}>+</button>
        </div>
    )
}