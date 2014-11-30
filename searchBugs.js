    var bz = require("bz");

    //logging to bugzilla
    var bugzilla = bz.createClient({
      username: '333onk@gmail.com',
      password: 'MMSe2014!',
      timeout: 30000
    });
    //priority=--&priority=P1&priority=P2&priority=P3&priority=P4&priority=P5&resolution=FIXED&classification=Client%20Software&query_format=advanced&product=Firefox&target_milestone=Firefox%2035&target_milestone=Firefox%2036
//     bugzilla.searchBugs({
//     priority: "P2",
//     resolution: "FIXED",
//     //classification: "Client Software",
//     query_format: "advanced",
//     product: "Firefox",
//     //target_milestone: "Firefox 35",
//   }, 
//   function(error, bugs) {
//     if(!error){
//      console.log(JSON.stringify(bugs));
//     }
//     else{
//      console.log(JSON.stringify(error));
//     }
//   }
// );

    bugzilla.searchBugs({
        "include_fields":"id,summary,status",
        "classification":"Client Software","limit":"0","product":"Firefox","resolution":"FIXED","target_milestone":"Firefox 33","target_milestone":"Firefox 34","target_milestone":"Firefox 35","target_milestone":"Firefox 36","target_milestone":"Firefox 37","target_milestone":"Firefox 38","target_milestone":"Firefox 39"
    
    }, function(err, bugs) {
      console.log(err,bugs.length);
  });

// "include_fields":"id,summary,status","classification":"Client Software","limit":"0","order":"bug_status%2Cpriority%2Cassigned_to%2Cbug_id","product":"Firefox","resolution":"FIXED","target_milestone":"Firefox 33","target_milestone":"Firefox 34","target_milestone":"Firefox 35","target_milestone":"Firefox 36","target_milestone":"Firefox 37","target_milestone":"Firefox 38","target_milestone":"Firefox 39"

    // product=Firefox&query_format=advanced&resolution=FIXED&target_milestone=Firefox%2034&target_milestone=Firefox%2035&target_milestone=Firefox%2036&target_milestone=Firefox%2037&target_milestone=Firefox%2038&target_milestone=Firefox%2039&order=bug_status%2Cpriority%2Cassigned_to%2Cbug_id&limit=0&list_id=11641598