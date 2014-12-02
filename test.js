console.log(process.argv);
var moment = require('moment');

var one = moment("2014-09-15T16:52:14Z");
var two = moment("2014-09-15T23:01:11Z");

console.log(one.diff(two, 'hours'))