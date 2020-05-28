const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/', function(req, res, next){
	console.log("GET recieved")
	res.send("GET recieved");
});

module.exports = router;