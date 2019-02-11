function getAndPrintHTMLChunks(){
    const https = require('https'); 
    const requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step1.html'
      };
    
    https.get(requestOptions, function (stream) {
    
      // set encoding of received data to UTF-8
      stream.setEncoding('utf8');
    
      // the callback is invoked when a `data` chunk is received
      stream.on('data', function (chunk) {
        console.log(chunk + "\n");
      });
    
    });
    

}

getAndPrintHTMLChunks();