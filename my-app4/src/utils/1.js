let pathToRegexp = require('path-to-regexp');
let params = [];
let regexp = pathToRegexp('/user/:id',params,{end:true});
console.log(regexp)
console.log('/user/100'.match(regexp))
