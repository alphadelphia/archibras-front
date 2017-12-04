var express = require("express");
var app = express();

var coin = require("bitcoin")

var client = new coin.Client({
  host: 'localhost',
  port: 41796, 		//mainnet 41798
  user: '',
  pass: '',
  timeout: 30000
});

var info;

var html_begin = '<html><head><title>Harmonian</title></head><body>';

var html_end = '</body></html>';  
  

client.cmd('getinfo', function(err, getInfo, resHeaders){
  if (err) return console.log(err);
  info = getInfo;
});

app.get("/", function(req,res){
        console.log("Got a visitor");
	res.send(html_begin + '<p>Running version: ' + info.version + '</p><p>Currently we have ' + info.blocks + ' blocks </p>' + html_end);
});

app.listen(8144, function() {
	console.log("Server running.");
});
