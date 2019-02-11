var getHTML = require('../https-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function printLeet(html){ 
    let result = html.slice();
    const leet = {
        a : '4', 
        e : '3', 
        l : '1', 
        o : '0', 
        s : '5', 
        t : '7', 
        'ck' : 'x', 
        'er' : '0r', 
        'you' : 'j00'};
    const lookUp = ['er', 'you', 'ck', 't', 's', 'o', 'l', 'e', 'a']; // this is Yunsung's code, he helped me get the x, er and you's. 
    for(var key of lookUp){ 
        let ind = result.search(key);
        while(ind !== -1){
            result = result.slice(0,ind) + leet[key] + result.slice(ind + key.length);
            ind = result.search(key);
        }
    }
    
    console.log(result);
} 

getHTML(requestOptions, printLeet);