var getHTML = require('../https-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpper(html){
    console.log(html.toUpperCase());
    return;
} 

getHTML(requestOptions, printUpper);