function getAndPrintHTMLChunks(options){
    const https = require('https'); 
    let myData = '';
    https.get(options, function (stream) {
       stream.setEncoding('utf8');
       stream.on('data', function (chunk) {
        myData += chunk + "\n";
      }); 
      stream.on('end', function(){
        console.log(myData);
      });
    });
    return;
}

const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };

getAndPrintHTMLChunks(requestOptions);

