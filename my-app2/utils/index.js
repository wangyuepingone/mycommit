let { pathToRegexp } = require('path-to-regexp');
let regexp = pathToRegexp('/user', [], { end: true });
console.log(regexp);

