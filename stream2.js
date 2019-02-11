function getAndPrintHTMLChunks(){
    const https = require('https'); 
    const requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'
      };
    var myData = '';
    https.get(requestOptions, function (stream) {
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

getAndPrintHTMLChunks();