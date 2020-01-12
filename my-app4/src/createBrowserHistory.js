export default function createBroWserHistory(){
    let globalHistory = window.history;
    let listeners = [];
    let initialLocation = {
        pathname:window.location.pathname,
        state:globalHistory.state
    }

    function createHref(location){
        return location.protocol+location.host+location.pathname+location.search+location.hash;
    }
    function setState(state){
        Object.assign(history,state);
        history.length = globalHistory.length;
        listeners.forEach(listener=>listener());
    }

    function push(path,state){
        const action = 'PUSH';
        const location = {path,state}
        globalHistory.pushState(state,null,path);
        setState({action,location})
    }

    function listen(listener){
        listeners.push(listener)
    }

    function replace(path,state){
        const action= 'REPLACE';
        const location = {path,state};
        globalHistory.replaceState(state,null,path);
        setState({action,location});
    }

    function go(n){
        return globalHistory.go(n)
    }
    function goBack(){
        return go(-1)
    }
    function goFromward(){
        return go(1);
    }
    let isBlock;
    function block(prompt){
        isBlock = prompt;
    }
    let history={
        length:globalHistory.length,//当前添加路径的时候的length变化
        action:'POP',//当前路径跳转来源
        location:initialLocation,//浏览器自带的路径对象
        createHref,//通过location路径对象创建的字符串完成路径
        push,//向当前history历史容器添加一条路径
        replace,//跳转到新的路径去，不会增加新的条目，只是会替换当前的条目
        go,//自定义回退路径或者是自定义向前路径
        goBack,//回退一条路径
        goFromward,//向前跳转一条路径
        block,//在当前未编辑成功页面阻止路径跳转，防止数据丢失
        listen,//监听当前路径的变化
    }
    return history;
}