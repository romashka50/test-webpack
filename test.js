var path = require('path');

var p1 = __dirname;
var p2 = path.join(p1, './src');
var p3 = path.join(p1, './src', '..', '..', '/test');

var d1 = __dirname;
var d2 = path.resolve(p1, './src');
var d3 = path.resolve(p1, './src', '..', '..', '/test');

console.log(p1);
console.log(p2);
console.log(p3);

console.log(d1);
console.log(d2);
console.log(d3);