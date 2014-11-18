var bz = require("bz");
var bugzilla = bz.createClient({
  //url: "https://bugzilla.mozilla.org/show_bug.cgi?id=955191",
  username: '333onk@gmail.com',
  password: 'MMSe2014!',
  timeout: 30000
});

//console.log(bugzilla);

bugzilla.searchBugs({
  resolution: "FIXED",
  query_format: "advanced"
}, function(error, bugs) {
    //console.log(bug);
    console.log(bugs.length);
    if (!error) {
    }
  });
// bugzilla.searchBugs('resolution=FIXED&query_format=advanced',function(error, bugs) {
//     console.log(bugs);
//     //lol(bug);
//   if (!error) {
//   } });

// function lol(bug){

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'root'
// });

// connection.connect();

// var post  = {creation_time: bug.creation_time, last_change_time: bug.last_change_time, summary: bug.summary, assigned_to_detail:bug.assigned_to_detail,  assigned_to: bug.assigned_to, resolution: bug.resolution, classification: bug.classification, component: bug.component, product:bug.product};
// var query = connection.query('INSERT INTO `bugzilla`.`bug` SET ?', post, function(err, result) {
//   // Neat!
// });

// connection.end();  
//}
