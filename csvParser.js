var fs = require('fs'); //io
var parse = require('csv-parse'); //parse csv from file
var bz = require("bz"); //bugzilla api library
var stringify = require('csv-stringify'); //js objects to csv text


var bugzilla = bz.createClient({
  username: '333onk@gmail.com',
  password: 'MMSe2014!',
  timeout: 30000
});

var parser = parse({delimiter: ','}, function(err, data){ //auto_parse
    if(!err){
        iterate(data);
    }
});

fs.createReadStream(__dirname+'/buglist.csv').pipe(parser);

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

    data[0].push('ASSIGNED', 'RESOLVED', 'COUNT_SUMMARY', 'COUNT_BLOCKS', 'COUNT_DEPENDS');

    console.log('length: ' + data.length + '-> '+JSON.stringify(data[0]));


    var i=1;
    function repeater(i) {
        if( i < data.length ) {
            bugzilla.bugHistory(parseInt(data[i][0]), function(error, history) {
                if (!error && getAssignedTimeFromBugHistory(history) && getResolvedTimeFromBugHistory(history)) {
                    data[i].push(getAssignedTimeFromBugHistory(history), getResolvedTimeFromBugHistory(history), data[i][3].split(' ').length.toString(), (data[i][8].split(',').length+1).toString(), (data[i][6].split(',').length+1).toString());
                    console.log(i + "-> " + JSON.stringify(data[i]));
                }
                repeater(i+1);
            });
        }
        if(i == data.length){
             stringify(data, function(err, output){
               writeFile(__dirname+'/buglistOK.csv',output);
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