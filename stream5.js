const getHTML = require("./https-functions.js");

function printHTML(html){
    console.log(html);
    return;
}

const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
  };

getHTML(requestOptions,printHTML);

