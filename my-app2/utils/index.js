let pathToRegexp = require('path-to-regexp');
let params = []
let regexp = pathToRegexp('/user/:id', params, { end: true });
console.log(regexp);
console.log(('/user/100'.match(regexp)));
console.log(params)


// console.log(regexp);
// console.log(regexp.test('/user'))
// console.log(regexp.test('/user/'))
// console.log(regexp.test('/user/1'))
// console.log(regexp.test('/user//////'))

// console.log('1a'.match(/\d(?=[a-z])/));
// console.log('1@'.match(/\d(?![a-z])/));
// console.log('a1'.match(/(?<=[a-z])\d/));
// console.log('$1'.match(/(?<![a-z])\d/));