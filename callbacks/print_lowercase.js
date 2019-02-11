var getHTML = require('../https-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLower(html){
    console.log(html.toLowerCase());
    return;
} 

getHTML(requestOptions, printLower);