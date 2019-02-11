const getHTML = require("./https-functions.js");
const upperCase = require("./callbacks/print_uppercase.js/index.js");

function printHTML(html){
    console.log(html);
    return;
} 


const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/uppercase.html'
  };

getHTML(requestOptions,upperCase);

