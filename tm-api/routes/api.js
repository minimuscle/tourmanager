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

function updateLocation(data, input) {
    var index = data.findIndex(obj => obj.name == input.name);
    data[index].coordinates = input.coordinates
    data[index].description = input.description
    data[index].time = input.time
}

function updateTour(data, input) {
    var index = data.findIndex(obj => obj.name == input.name);
    data[index].type = input.type
    data[index].locations = input.locations
    data[index].time = input.time
}

function updateUser(data, input) {
    var index = data.findIndex(obj => obj.username == input.username);
    data[index].password = input.password
    data[index].type = input.type
}

router.get('/', function(req, res, next) {
	console.log("GET recieved")
	res.send("GET recieved")
});

router.get('/get/locations', function(req, res, next) {
    res.json({
        locations: locations
    })
});

router.get('/get/tours', function(req, res, next) {
    res.json({
        tours: tours
    })
});

router.get('/get/users', function(req, res, next) {
    res.json({
        users: users
    })
});

router.post('/add/location', function(req, res, next) {
    isDuplicate = checkDuplicate(locations, req.body.name)
    isValidLocation = validateLocation(req.body)
    
    if(!isDuplicate && isValidLocation) {
        locations.push(req.body)
        res.send("SUCCESS: Location added.")
    } else if (!isValidLocation) {
        res.send("ERROR: Invalid location.")
    } else if (isDuplicate){
        res.send("ERROR: Duplicate locations.")
    } else {
        res.send("ERROR: Unknown.")
    }
});

router.post('/add/tour', function(req, res, next) {
    isDuplicate = checkDuplicate(tours, req.body.name)
    isValidTour = validateTour(req.body)
    
    if(!isDuplicate && isValidTour) {
        tours.push(req.body)
        res.send("SUCCESS: Tour added.")
    } else if (!isValidTour) {
        res.send("ERROR: Invalid tour.")
    } else if (isDuplicate){
        res.send("ERROR: Duplicate tours.")
    } else {
        res.send("ERROR: Unknown.")
    }
});

router.post('/add/user', function(req, res, next) {
    isDuplicate = checkDuplicate(users, req.body.username)
    isValidUser = validateUser(req.body)
    
    if(!isDuplicate && isValidUser) {
        users.push(req.body)
        res.send("SUCCESS: User added.")
    } else if (!isValidUser) {
        res.send("ERROR: Invalid user.")
    } else if (isDuplicate){
        res.send("ERROR: Duplicate users.")
    } else {
        res.send("ERROR: Unknown.")
    }
});

router.post('/edit/location', function(req, res, next) {
    isDuplicate = checkDuplicate(locations, req.body.name)
    isValidLocation = validateLocation(req.body)

    if(isDuplicate && isValidLocation) {
        updateLocation(locations, req.body)
        res.send("SUCCESS: Location updated.")
    } else if(!isDuplicate) {
        res.send("ERROR: Location does not exist.")
    } else if(!isValidLocation) {
        res.send("ERROR: Invalid location.")
    } else {
        res.send("ERROR: Unknown.")
    }
});

router.post('/edit/tour', function(req, res, next) {
    isDuplicate = checkDuplicate(tours, req.body.name)
    isValidTour = validateTour(req.body)

    if(isDuplicate && isValidTour) {
        updateTour(tours, req.body)
        res.send("SUCCESS: Tour updated.")
    } else if(!isDuplicate) {
        res.send("ERROR: Tour does not exist.")
    } else if(!isValidTour) {
        res.send("ERROR: Invalid tour.")
    } else {
        res.send("ERROR: Unknown.")
    }
});

router.post('/edit/user', function(req, res, next) {
    isDuplicate = checkDuplicate(users, req.body.username)
    isValidUser = validateUser(req.body)

    if(isDuplicate && isValidUser) {
        updateUser(users, req.body)
        res.send("SUCCESS: User updated.")
    } else if(!isDuplicate) {
        res.send("ERROR: User does not exist.")
    } else if(!isValidUser) {
        res.send("ERROR: Invalid user.")
    } else {
        res.send("ERROR: Unknown.")
    }
});

module.exports = router;