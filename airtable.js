// var apiKey = 'keyQudrR93VC2LEkj';
// //URL: https://airtable.com/tblY8CfAjWIUfnW0Z


var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyQudrR93VC2LEkj'
});
var base = Airtable.base('appPN9KAoXrwm3sCY');