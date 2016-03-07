var express = require('express');
var app = express(); 
var path = require("path");
var os = require('os');
app.set('port', (process.env.PORT));
app.get('/', function(request, response) {
	var ip = request.headers['x-forwarded-for'];
	var requestObjectsParsed = JSON.stringify(ip);
	var prerequestedItem = os.networkInterfaces()
	var requestedItem = JSON.stringify(prerequestedItem);
	var netAddress = JSON.stringify(ip);
	var netLanguage = JSON.stringify((request.headers['accept-language']).substr(0, 5));
	var netOS = JSON.stringify((request.headers['user-agent']).substr(13, 21));
	response.send('{\"ipaddress\":'+netAddress+',\"language\":'+netLanguage+',\"software\":'+netOS+'}');
	
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
