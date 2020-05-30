const express = require('express');
const request = require('request');
const router = express.Router();

const locations = require("../jsons/locations.json");
const tours = require("../jsons/tours.json");
const users = require("../jsons/users.json");

function checkDuplicate(data, input) {
    var matches = 0
    Object.keys(data).forEach(function(key) {
      if(input == data[key].name || input == data[key].username){
        matches++ 
      }
    })
    return matches
}

function validateLocation(input) {
    if(input.hasOwnProperty('name') && input.hasOwnProperty('coordinates') && input.hasOwnProperty('description') && input.hasOwnProperty('time')){
        return true
    } else {
        return false
    }
}

function validateTour(input) {
    if(input.hasOwnProperty('name') && input.hasOwnProperty('type') && input.hasOwnProperty('locations') && input.hasOwnProperty('time')){
        return true
    } else {
        return false
    }
}

function validateUser(input) {
    if(input.hasOwnProperty('username') && input.hasOwnProperty('password') && input.hasOwnProperty('type')){
        return true
    } else {
        return false
    }
}



router.get('/', function(req, res, next) {
	console.log("GET recieved")
	res.send("GET recieved")
});

router.get('/locations', function(req, res, next) {
    res.json({
        locations: locations
    })
});

router.get('/tours', function(req, res, next) {
    res.json({
        tours: tours
    })
});

router.get('/users', function(req, res, next) {
    res.json({
        users: users
    })
});

router.post('/location', function(req, res, next) {
    isDuplicate = checkDuplicate(locations, req.body.name)
    isValidLocation = validateLocation(req.body)
    
    if(!isDuplicate && isValidLocation) {
        locations.push(req.body)
        res.json({
            locations: locations
        })
    } else if (!isValidLocation) {
        res.send("ERROR: Invalid location.")
    } else if (isDuplicate){
        res.send("ERROR: Duplicate locations.")
    } else {
        res.send("ERROR: Unknown.")
    }
});

router.post('/tour', function(req, res, next) {
    isDuplicate = checkDuplicate(tours, req.body.name)
    isValidTour = validateTour(req.body)
    
    if(!isDuplicate && isValidTour) {
        tours.push(req.body)
        res.json({
            tours: tours
        })
    } else if (!isValidTour) {
        res.send("ERROR: Invalid tour.")
    } else if (isDuplicate){
        res.send("ERROR: Duplicate tours.")
    } else {
        res.send("ERROR: Unknown.")
    }
});

router.post('/user', function(req, res, next) {
    isDuplicate = checkDuplicate(users, req.body.username)
    isValidUser = validateUser(req.body)
    
    if(!isDuplicate && isValidUser) {
        users.push(req.body)
        res.json({
            users: users
        })
    } else if (!isValidUser) {
        res.send("ERROR: Invalid user.")
    } else if (isDuplicate){
        res.send("ERROR: Duplicate users.")
    } else {
        res.send("ERROR: Unknown.")
    }
});

module.exports = router;