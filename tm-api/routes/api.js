const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/', function(req, res, next){
	console.log("GET recieved")
	res.send("GET recieved");
});

router.get('/locations', function(req, res, next){
    location = require("../jsons/locations.json");

    res.json({
        data: location
    })
});

router.get('/tours', function(req, res, next){
    tour = require("../jsons/tours.json");

    res.json({
        data: tour
    })
});

router.get('/users', function(req, res, next){
	user = require("../jsons/users.json");

    res.json({
        data: user
    })
});

module.exports = router;