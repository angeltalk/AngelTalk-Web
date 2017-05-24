var functions = require('firebase-functions');

 exports.redirectApp = functions.https.onRequest((request, response) => {
    var key = (request.url).replace("/","");
     
    response.writeHead(302,  {Location: "app://angeltalk?key="+key});
    response.end();
 });
