    var bz = require("bz");

    //logging to bugzilla
    var bugzilla = bz.createClient({
      username: '333onk@gmail.com',
      password: 'MMSe2014!',
      timeout: 30000
    });

    //impotring data from file
    var bugs = require('./ids');
    var data = bugs.data;

    for (var i = 0; i < 100; ++i) {
        var item = data[i]; 
        bugzilla.getBug(parseInt(item), function(error, bug) {
        if (!error) {
            bugzilla.bugHistory(parseInt(bug.id), function(error, history) {
                if (!error && getAssignedTimeFromBugHistory(history) && getResolvedTimeFromBugHistory(history)) {
                    insertIntoDB(bug, history);  
                }
            });  
        }
    });  
    }

    function insertIntoDB(bug, history){

      var mysql = require('mysql');

      var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root'
    });

      connection.connect();
      var summary = bug.summary.replace(/"/g, "").replace(/'/g, "");

      var post  = {
        bug_id: bug.id,
        creation_time: getAssignedTimeFromBugHistory(history), 
        summary: summary,
        summary_words_count: summary.split(' ').length,
        last_change_time: getResolvedTimeFromBugHistory(history), 
        platform: bug.platform,
        op_sys: bug.op_sys,
        priority: bug.priority,
        depends: bug.depends_on.length,
        blocks: bug.blocks.length,
        component: bug.component
    };
    var query = connection.query('INSERT INTO `bugzilla`.`bug` SET ?', post, function(err, result) {
        if(!err){
            console.log(result)
        }
        else{
            console.log(err);
        }
    });

    connection.end();  
    }

    function getAssignedTimeFromBugHistory(bugHistory){

        var t =  bugHistory[0].history.filter(function (el) {
            if(el.changes.filter(function(ch){
             return  ch.added == "ASSIGNED";
         }).length){
                return true;
            }
        });

        if(t.length){
            return t[0].when;
        }
        return false;
    }


     function getResolvedTimeFromBugHistory(bugHistory){

        var t =  bugHistory[0].history.filter(function (el) {
            if(el.changes.filter(function(ch){
             return  ch.added == "RESOLVED";
         }).length){
                return true;
            }
        });

        if(t.length){
            return t[0].when;
        }
        return false;
    }


