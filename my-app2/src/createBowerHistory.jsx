export default function createBowerHistory(){
    const globalHistory = window.history;
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
        listeners.forEach(listen=>listen());
    }
    function push(path,state){
        let action = 'PUSH';
        const location = {path,state};
        globalHistory.pushState(state,null,path);
        setState({action,location})
    }
    function listen(listener){
        listeners.push(listener)
    }
    function replace(path,state){
        let action = 'REPLACE';
        const location = {path,state};
        globalHistory.replaceState(state,null,path);
        setState({action,location})
    }
    function go(n){
        globalHistory.go(n)
    }
    function goBack(){
        go(-1)
    }
    function goForward(){
        go(1)
    }
    let isBlock;
    function block(prompt){
        isBlock = prompt;
    }
    let hostory = {
        length:globalHistory.length,//当前history切换路径的个数或者是次数
        action: 'POP',//当前路径的来源
        location:initialLocation,//返回当前location路径对象
        createHref,//获取到location中字符串的路径地址
        push,//给当前的路由容器添加一个路径条目
        replace,//在当前的路由容器替换指定的路径条目
        go,
        goBack,
        goForward,
        block,//默认阻止当前页面的跳转
        listen,
    }
    return hostory
}