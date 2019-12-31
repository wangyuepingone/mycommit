

/**
 * 
 * @param {*} node 他为React节点(虚拟dom)
 * @param {*} parent 他为真实的dom元素节点
 */
function render(node,parent){
    //递归的结束条件，如果chidren遍历到了最后，他的节点已经递归完毕，最后就只剩下一个文本元素节点，因为是
    //字符串，所以需要创建一个文本节点然后插入到html之中去
    if(typeof node === 'string'){
        return parent.appendChild(document.createTextNode(node));
    }
    let props,type;
    type = node.type;
    props = node.props;
    //如果是类组件的话，判断isReactComponent是否为true，为true就是类组件
    //先创建类的实例，然后取实例上的render方法把render方法的节点元素变成React元素
    //改变type和props变量的属性就是在把类和函数的节点元素转成React元素；
    if(type.isReactComponent){
        let types = new type(props);
        let element = types.render();
        type = element.type;
        props = element.props;
        if(typeof type.element === 'function'){
            return render(element,parent)
        }
    //如果是函数组件的话就走判断的代码，执行函数，并且返回函数的执行结果，
    //更改他的type和props属性，然后正常运行下面的代码
    }else if(typeof type === 'function'){
        let element=type(props);
        type = element.type;
        props = element.props;
        if(typeof type.element === 'function'){
            return render(element,parent)
        }
    }
    let documentElments=document.createElement(type);
    parent.appendChild(documentElments);
    //迭代props对象属性,props存放children数组和type的属性
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
        }else if(propName === 'className'){
            documentElments.className = props.className;
        }else if(propName === 'style'){
            let styleObj = props.style;
            for(let styleKey in styleObj){
                documentElments.style[styleKey] = styleObj[styleKey]
            }
        }else{
            documentElments.setAttribute(propName,props[propName]);
        }
    }
}
export default{
    render
}