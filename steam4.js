function printHTML(html){
    console.log(html);
    return;
}

function getHTML(options,callback){
    const https = require('https'); 
    let myData = '';
    https.get(options, function (stream) {
       stream.setEncoding('utf8');
       stream.on('data', function (chunk) {
        myData += chunk + "\n";
      }); 
      stream.on('end', function(){
        callback(myData);
      });
    });
    return;
}

const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

getHTML(requestOptions,printHTML);