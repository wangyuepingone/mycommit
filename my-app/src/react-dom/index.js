

/**
 * 
 * @param {*} node 他为React节点(虚拟dom)
 * @param {*} parent 他为真实的dom元素节点
 */
function render(node,parent){
    let props,type;
    type = node.type;
    props = node.props;
    let documentElments=document.createElement(type);
    parent.appendChild(documentElments);
    //迭代props对象属性
    for(let propName in props){
        //判断当前的属性名是否是children
        if(propName === 'children'){
            //取出props中的children
            let children = props.children
            //如果children不是数组那就转换成数组
            if(!Array.isArray(children)){
                children = [children]
            }
            //把children数组遍历，然后递归props中的子节点元素并且插入到真实的dom元素节点中去
            children.forEach(childType=>render(childType,documentElments))
        }
    }
}
export default{
    render
}