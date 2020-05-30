const express = require('express');
const request = require('request');
const router = express.Router();

const locations = require("../jsons/locations.json");
const tours = require("../jsons/tours.json");
const users = require("../jsons/users.json");

router.get('/', function(req, res, next){
	console.log("GET recieved")
	res.send("GET recieved");
});

router.get('/locations', function(req, res, next){

    res.json({
        locations: locations
    })
});

router.get('/tours', function(req, res, next){

    res.json({
        tours: tours
    })
});

router.get('/users', function(req, res, next){

    res.json({
        users: users
    })
});

router.post('/user', function(req, res, next){
	console.log(req.body)
	res.send("POST recieved")
});

module.exports = router;