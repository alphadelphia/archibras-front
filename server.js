"use strict"
var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

const coin = require("bitcoin");

var rpc;

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


function startRPCClient() {
	
	console.log('starting rpc client');
	var data = JSON.parse(fs.readFileSync('credentials.json', 'utf8'));

	rpc = new coin.Client({
	  host: 'localhost',
	  port: 41796, 		//mainnet 41798
	  user: data.user,
	  pass: data.pass,
	  timeout: 30000
	});
}

/*coin client RPC routes*/

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

	rpc.cmd('listtransactions', '*', 100,  function(err, getList, resHeaders){
	  if (err) {
	  	return console.log(err);
	  }	
	  list = getList;
	  res.send(list);
	});
});

app.get('/newaddress', function(req, res){

	var address;

	rpc.cmd('getnewaddress', function(err, getNew, resHeaders){
	  if (err) {
	  	return console.log(err);
	  }	
	  address = getNew;
	  res.send(address);
	});
});

app.get('/send', function(req,res) {

	var address = req.query.address;
	var amount = parseFloat(req.query.amount);
	var txid;

	//console.log("sendtoaddress " + address + " " + amount);

	rpc.cmd('sendtoaddress', address, amount, function(err, getTxid, resHeaders){
	  if (err) {
	  	res.send(err.toString());
	  	return;
	  }	
	  txid = getTxid;
	  res.send(txid);
	});
});

app.get('/message', function(req,res) {
	res.send('{"msg" : "Welcome to Harmonian!"}');
});



