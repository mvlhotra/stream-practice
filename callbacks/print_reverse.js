var getHTML = require('../https-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse(html){
    console.log(html.split().reverse().join(""));
    return;
} 

getHTML(requestOptions, printReverse);