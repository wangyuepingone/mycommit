//判断当前的浏览器支持不支持Symbol属性，如果支持那就用Symbol属性把reate.elment转换成为唯一标识，否则就转换成为二进制
const hasSymbol = typeof Symbol === 'function'&& Symbol.for;
export const REACT_ELEMENT_TYPE = hasSymbol?Symbol.for('reate.elment'):0xeac7;

class Component{
    constructor(props){
        this.props = props
    }
    static isReactComponent = true;
}

//type是组件的类型，组件又分为自定义组件和标签组件
//config存放着组件属性，比如className，id等等
//children存放着节点元素和子节点组件，还有子节点的节点元素
function createElement(type,config,children){
    let props = {};
    //把config对象的所有属性和值全部复制一份给props；
    for(let key in config){
        props[key] = config[key]
    }
    //把函数的实参的个数减去前面两个，前面两个实参分别是type,config，所以只是取children的所有参数
    let childrenLength = arguments.length-2;
    //如果当前的元素节点只有一个的话，那么就把这个元素节点赋值给props.children
    if(childrenLength ===1){
        props.children = children
        //如果当前children元素节点有两个以上的话，就把参数下的所有的节点全部拿出来放到新的数组中去；
    }else if(childrenLength >1){
        props.children = Array.prototype.slice.call(arguments,2);
    }
    /**
     * REACT_ELEMENT_TYPE表示这个是一个React元素
     * type表示这是一个React元素类型，string，number，Function，class
     * 
     */
    return {$$typeof:REACT_ELEMENT_TYPE,type,props}
}

export default {
    createElement,
    Component
}