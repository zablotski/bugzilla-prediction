var bz = require("bz");
var bugzilla = bz.createClient({
  //url: "https://bugzilla.mozilla.org/show_bug.cgi?id=955191",
  username: '333onk@gmail.com',
  password: 'MMSe2014!',
  timeout: 30000
});
var table = [
'928012',
'278549',
'955191',
'403266',
'491601',
'494200',
'495435',
'496879',
'499277',
'499946',
'500012',
'500208',
'500427',
'501326',
'501693',
'502745',
'502828',
'509005',
'509732',
'510418',
'510488',
'510858',
'510862',
'511493',
'512006',
'515609',
'515683',
'516376',
'517201',
'520368',
'522039',
'522257',
'523718',
'529912',
'530495',
'535551',
'538999',
'541817',
'546273',
'546386',
'547731',
'552526',
'556016',
'558960',
'559413',
'559445',
'559458',
'559651',
'560426',
'561733',
'562189',
'562366',
'562541',
'562981',
'564012',
'564019',
'564786',
'565329',
'566288',
'566586',
'566640',
'567472',
'568092',
'568818',
'569539',
'569681',
'570969',
'571489',
'571868',
'572326',
'572696',
'573041',
'573443',
'573560',
'573561',
'573579',
'573732',
'578672',
'580576',
'580676',
'581139',
'581568',
'582745',
'588942',
'592562',
'593237',
'595625',
'595628',
'595639',
'596282',
'596935',
'597022',
'598621',
'598958',
'600108',
'603848',
'604192',
'609931',
'610725',
'616511',
'620040',
'621528',
'621913',
'628679',
'632802',
'633751',
'636139',
'636140',
'644435',
'644641',
'648026',
'707734',
'709010',
'709013',
'709015',
'710548',
'710804',
'711358',
'711488',
'711986',
'715205',
'715814',
'717844',
'718651',
'718652',
'720811',
'720831',
'721004',
'721777',
'722031',
'722035',
'722197',
'722812',
'723902',
'723963',
'725312',
'727443',
'728128',
'728373',
'729428',
'729430',
'729441',
'730434',
'730848',
'732350',
'732770',
'732774',
'736193',
'739680',
'740974',
'742092',
'742761',
'742765',
'742775',
'742778',
'742780',
'742805',
'743229',
'748077',
'748858',
'748886',
'748889',
'748895',
'751144',
'751145',
'751146',
'751147',
'754083',
'757496',
'758672',
'759017',
'760100',
'760402',
'762349',
'763590',
'766549',
'766878',
'770453',
'770847',
'770869',
'771518',
'773534',
'774000',
'774809',
'776792',
'777672',
'778810',
'780336',
'780373',
'782973',
'789358',
'793553',
'794262',
'797497',
'804315',
'809031',
'823031',
'831391',
'831792',
'832412',
'835799',
'835809',
'837111',
'839472',
'839473',
'842627',
'847352',
'847354',
'855543',
'859263',
'860842',
'861171',
'861236',
'861494',
'862758',
'863318',
'863422',
'863702',
'864382',
'864891',
'864892',
'865279',
'866066',
'866174',
'872218',
'872588',
'873418',
'873503',
'873544',
'874973',
'876741',
'900513',
'901044',
'902393',
'902465',
'902517',
'902897',
'903043',
'918295',
'920522',
'920561',
'920623',
'921824',
'926535',
'926875',
'928367',
'928405',
'936225',
'938312',
'938637',
'940036',
'940420',
'941024',
'941174',
'941176',
'941950',
'942021',
'942716',
'942726',
'942854',
'943831',
'943849',
'944686',
'945727',
'946172',
'946339',
'946955',
'946999',
'948001',
'948396',
'949044',
'949404',
'950300',
'950489',
'951290',
'951298',
'951321',
'951375',
'958650',
'959144',
'959242',
'960120',
'961047',
'961769',
'962044',
'963553',
'963555',
'964173',
'964261',
'965805',
'966989',
'967094',
'968237',
'969827',
'970101',
'970937',
'970995',
'971006',
'972085',
'972365',
'972957',
'977207',
'977208',
'977209',
'977210',
'977680',
'978063',
'978065',
'978067',
'978197',
'978546',
'978565',
'978569',
'978632',
'978687',
'978780',
'980332',
'980417',
'981277',
'981440',
'981610',
'983513',
'983739',
'983991',
'984151',
'984153',
'984158',
'984845',
'984897',
'985735',
'986752',
'988212',
'993022',
'997235',
'101265',
'101265',
'101266',
'101587',
'101694',
'102025',
'102335',
'102336',
'102336',
'102727',
'102755',
'102763',
'102889',
'102893',
'102894',
'102956',
'102985',
'103067',
'103125',
'103133',
'103152',
'103213',
'103282',
'103288',
'103325',
'103325',
'103325',
'103336',
'103507',
'103663',
'103863',
'103951',
'104137',
'104137',
'104137',
'104274',
'104327',
'104442',
'104565',
'104664',
'104731',
'104732',
'104739',
'104782',
'104782',
'104783',
'104798',
'104800',
'104975',
'104983',
'105030',
'105072',
'105072',
'105551',
'105604',
'105915',
'105916',
'106132',
'410842',
'451737',
'103854',
'105839',
'105839',
'106087',
'106248',
'106391',
'106906',
'107146',
'107344',
'107529',
'107658',
'107909',
'107912',
'107918',
'108304',
'578564',
'633066',
'633750',
'656576',
'949051',
'949065',
'950821',
'967785',
'972645',
'974108',
'977776',
'978275',
'980184',
'980608',
'980687',
'980688',
'984486',
'985476',
'986716',
'987417',
'988589',
'989151',
'996476',
'100320',
'100399',
'100409',
'101715',
'102142',
'102748',
'102795',
'102894',
'103059',
'103290',
'103293',
'103433',
'104000',
'104074',
'104103',
'104431',
'104899',
'105933',
'106563',
'109660',
'103859',
'105012',
'105064',
'958919',
'327378',
'413599',
'381505',
'391427',
'394779',
'398670',
'403338',
'421618',
'449537',
'454362',
'455714',
'483171',
'520588',
'826715',
'827631',
'827632',
'828354',
'828360',
'828378',
'828380',
'828403',
'843116',
'878222',
'878230',
'878234',
'878244',
'878255',
'878645',
'884240',
'887751',
'890842',
'890858',
'890864',
'890871',
'899748',
'911150',
'933439',
'935472',
'935475',
'935899',
'935908',
'935913',
'936433'
];

for (var i = 0+50+50+50; i < 50+50+50+50; ++i) {
  var item = table[i];  // Calling myNodeList.item(i) isn't necessary in JavaScript
  bugzilla.getBug(parseInt(item), function(error, bug) {
    console.log(bug.id + "->" + i);
    lol(bug);
  if (!error) {
  }
});  
}

function lol(bug){

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root'
});

connection.connect();

var post  = {creation_time: bug.creation_time, last_change_time: bug.last_change_time, summary: bug.summary, assigned_to_detail:bug.assigned_to_detail,  assigned_to: bug.assigned_to, resolution: bug.resolution, classification: bug.classification, component: bug.component, product:bug.product};
var query = connection.query('INSERT INTO `bugzilla`.`bug` SET ?', post, function(err, result) {
  // Neat!
});

connection.end();  
}
