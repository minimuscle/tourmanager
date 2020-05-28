const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/', function(req, res){
	console.log("GET recieved")
	res.send("GET recieved");
});

module.exports = router;