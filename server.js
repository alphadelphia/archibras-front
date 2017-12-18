"use strict"
var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

const coin = require("bitcoin");

var rpc;
/*
var key = fs.readFileSync('ssl/harmonian.key');
var cert = fs.readFileSync('ssl/harmonian.crt');
//var ca = fs.readFileSync( 'ssl/intermediate.crt' );

var options = {
	key: key,
	cert: cert
};

var https = require('https');

https.createServer(options, app).listen(8144, function() {
	console.log("Harmonian: ḧttps web server listening on port 8144");
});
*/


var http = require('http');
http.createServer(app).listen(8080, function() {
	console.log("Harmonian: http web server listening on port 8080");
	
    startRPCClient();

});

app.use(express.static('html'));

app.get('/', function(req, res){
	res.header("Access-Control-Allow-Origin", "*");
	res.sendFile(path.resolve(__dirname, 'html','index.html'));
});

app.get('/info', function(req, res){

	var info;

	rpc.cmd('getinfo', function(err, getInfo, resHeaders){
	  if (err) {
	  	return console.log(err);
	  }	
	  info = getInfo;
	  res.send(info);
	});
});

app.get('/txlist', function(req, res){

	var list;

	rpc.cmd('listtransactions', function(err, getList, resHeaders){
	  if (err) {
	  	return console.log(err);
	  }	
	  list = getList;
	  res.send(list);
	});
});

app.get('/message', function(req,res) {
	res.send('{"msg" : "Welcome to Harmonian!"}');
});

function startRPCClient() {
	
	console.log('starting rpc client');
	var data = JSON.parse(fs.readFileSync('credentials.json', 'utf8'));

	rpc = new coin.Client({
	  host: 'localhost',
	  port: 41796, 		//mainnet 41798
	  user: data.user,
	  pass: data.pass,
	  //ssl: true,
	  timeout: 30000
	});
}

/*
*/



