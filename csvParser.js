if(process.argv.length == 6){

    var fs = require('fs'); //io
    var parse = require('csv-parse'); //parse csv from file
    var bz = require("bz"); //bugzilla api library
    var stringify = require('csv-stringify'); //js objects to csv text
    var moment = require('moment'); //library for comparision dates
    var start = Date.now();//timer =)

    var bugzilla = bz.createClient({
      username: process.argv[2],//'333onk@gmail.com',
      password: process.argv[3],//'MMSe2014!',
      timeout: 30000
    });

    var parser = parse({delimiter: ','}, function(err, data){ //auto_parse
        if(!err){
            iterate(data);
        }
    });

    fs.createReadStream(__dirname+'/'+process.argv[4]).pipe(parser);

    function writeFile(filename, text){
        fs.writeFile(filename, text, function(err) {
            if(err) {
                console.log(err);
            } else {
                console.log("The file was saved!");
            }
        });    
    }

    function iterate(data){

        data[0].push(
            'ASSIGNED', 
            'RESOLVED', 
            'HOURS', 
            'COUNT_SUMMARY', 
            'COUNT_BLOCKS', 
            'COUNT_DEPENDS', 
            'EVENTS_COUNT', 
            'HOURS_BEFORE_ASSIGNED'
        );

        console.log('length: ' + data.length + '-> '+JSON.stringify(data[0]));


        var i=0;
        function repeater(i) {
            var ASSIGNED, RESOLVED, SUMMARY ;
            if( i < data.length) {
                bugzilla.getBug(parseInt(data[i][0]), function(err, bug) {
                        bugzilla.bugHistory(parseInt(data[i][0]), function(error, history) {
                            if (!error && getAssignedTimeFromBugHistory(history) && getResolvedTimeFromBugHistory(history)) {

                                SUMMARY = (bug.summary.length)?bug.summary.replace(/"/g, "").replace(/'/g, ""):"";
                                ASSIGNED = getAssignedTimeFromBugHistory(history);
                                RESOLVED = getResolvedTimeFromBugHistory(history);

                                data[i].push(
                                    ASSIGNED, 
                                    RESOLVED, 
                                    moment(RESOLVED).diff(moment(ASSIGNED), 'hours'), 
                                    SUMMARY.split(' ').length, 
                                    bug.blocks.length, 
                                    bug.depends_on.length, 
                                    getEventsCountInBugHistory(history),
                                    moment(ASSIGNED).diff(moment(bug.creation_time), 'hours')
                                );
                                console.log(i + "-> " + JSON.stringify(data[i]));
                            }
                            repeater(i+1);
                        });
                });
            }
            if(i == data.length){
                 stringify(data, function(err, output){
                   writeFile(__dirname+'/'+process.argv[5],output);
                   console.log('Output: ' + __dirname+'/'+process.argv[5]);
                }); 
            }
        }
        repeater(i);

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
            return t[t.length-1].when;
        }
        return false;
    }

    function getEventsCountInBugHistory(bugHistory){
        var i;
        for (i = 0; i< bugHistory[0].history.length; i++) {

            if( bugHistory[0].history[i].changes.filter(function(ch){
               return  ch.added == "ASSIGNED";
           }).length){
                break;
            }
        }
        return i+1;
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
            return t[t.length-1].when;
        }
        return false;
    }

    process.on("exit", function() {
      var end = Date.now();
      console.log("Time taken: %ds", (end - start)/1000);
    });
}
else{
    console.log("You must install node modules:");
    console.log(" - csv-parse");
    console.log(" - csv-stringify");
    console.log(" - moment");
    console.log(" - fs");
    console.log(" - bz");
    console.log("Usage: node csvParser.js bugzillaLogin bugzillaPassword inputFile outputFile");
}