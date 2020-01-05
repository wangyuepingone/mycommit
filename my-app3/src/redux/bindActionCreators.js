
export default function(actions,dispath){
    let boundActionCreators = {};
    for(let key in actions){
        boundActionCreators[key] = function(...args){
            return dispath(actions[key](...args))
        }
    }
    return boundActionCreators;
}