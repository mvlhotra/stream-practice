module.exports = function getHTML(options,callback){
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
};