var express = require('express');
var app = express(); 
var path = require("path");
var os = require('os');
	var prerequestedItem = os.networkInterfaces()
	var requestedItem = JSON.stringify(prerequestedItem);
	var netAddress = JSON.stringify(prerequestedItem.eth0[0].address);
	var netLanguage = JSON.stringify(os.type());
	var netOS = JSON.stringify(os.type());
app.set('port', (process.env.PORT));
//format is {"ipaddress":"107.144.151.227","language":"en-US","software":"Windows NT 6.1; WOW64"}
app.get('/', function(request, response) {
	var requestObjects = Object.keys(request.client.server);
	/*
	var prerequestedItem = os.networkInterfaces()
	var requestedItem = JSON.stringify(prerequestedItem);
	var netAddress = JSON.stringify(prerequestedItem.eth0[0].address);
	var netLanguage = JSON.stringify(os.type());
	var netOS = JSON.stringify(os.type());
	*/
	response.send(requestedItem+'<br/><br/>'+'{\"ipaddrers\":'+netAddress+',\"language\":'+netLanguage+',\"software\":'+netOS+''+'<br/> {"ipaddress":"107.144.151.227","language":"en-US","software":"Windows NT 6.1; WOW64"}');
	
});
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
