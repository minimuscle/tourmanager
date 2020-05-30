const express = require('express');
const request = require('request');
const router = express.Router();

const locations = require("../jsons/locations.json");
const tours = require("../jsons/tours.json");
const users = require("../jsons/users.json");

function checkDuplicate(data, input) {
    var matches = 0
    Object.keys(data).forEach(function(key) {
      if(input == data[key].name){
        matches++ 
      }
    })
    return matches
}

function validateJson(input) {

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


router.post('/locations', function(req, res, next) {
    isDuplicate = checkDuplicate(locations, req.body.name)
    isValidJson = validateJson(req.body)
    
    if(!isDuplicate) {
        locations.push(req.body)
        res.json({
            locations: locations
        })
    } else {
        res.send("ERROR: Duplicate Entry")
    }
});

module.exports = router;