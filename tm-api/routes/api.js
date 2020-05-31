const express = require('express');
const request = require('request');
const fs = require('fs');
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

function writeJson(data, file) {
    var json = JSON.stringify(data)
    fs.writeFile(file, json, 'utf8', function(err) {
        if (err) throw err
    });
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
    if(input.hasOwnProperty('username') && input.hasOwnProperty('password') && input.hasOwnProperty('type') && input.hasOwnProperty('active') && input.hasOwnProperty('login')){
        return true
    } else {
        return false
    }
}

function validateLogin(input) {
    if(input.hasOwnProperty('username') && input.hasOwnProperty('password')) {
        return true
    } else {
        return false
    }
}

function validateLogout(input) {
    if(input.hasOwnProperty('username')) {
        return true
    } else {
        return false
    }
}

function loginUser(data, input) {
    var index = data.findIndex(obj => obj.username == input.username);

    if(data[index].username == input.username && data[index].password == input.password) {
        data[index].login = true
        return true
    } else {
        return false
    }
}

function logoutUser(data, input) {
    var index = data.findIndex(obj => obj.username == input.username);

    if(data[index].username == input.username && data[index].login) {
        data[index].login = false
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
    data[index].active = input.active
    data[index].login = input.login
}

function deleteUser(data, input) {
	var index = data.findIndex(obj => obj.username == input.username);
	data.splice(index, index);
}

function deleteData(data, input) {
	var index = data.findIndex(obj => obj.name == input.name);
	data.splice(index, index);
}

router.get('/', function(req, res, next) {
	console.log("GET recieved")
	res.send("GET recieved")
});

router.get('/get/locations', function(req, res, next) {
    res.json({
        data: locations
    })
});

router.get('/get/tours', function(req, res, next) {
    res.json({
        data: tours
    })
});

router.get('/get/users', function(req, res, next) {
    res.json({
        data: users
    })
});

router.post('/add/location', function(req, res, next) {
    isDuplicate = checkDuplicate(locations, req.body.name)
    isValidLocation = validateLocation(req.body)
    
    if(!isDuplicate && isValidLocation) {
        locations.push(req.body)
        writeJson(locations, "jsons/locations.json")
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
        writeJson(tours, "jsons/tours.json")
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
        writeJson(users, "jsons/users.json")
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
        writeJson(locations, "jsons/locations.json")
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
        writeJson(tours, "jsons/tours.json")
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
        writeJson(users, "jsons/users.json")
        res.send("SUCCESS: User updated.")
    } else if(!isDuplicate) {
        res.send("ERROR: User does not exist.")
    } else if(!isValidUser) {
        res.send("ERROR: Invalid user.")
    } else {
        res.send("ERROR: Unknown.")
    }
});

router.post('/delete/location', function(req, res, next) {
	isDuplicate = checkDuplicate(location, req.body.name)

	if(req.body.hasOwnProperty('name')) {
		if(isDuplicate) {
			deleteData(locations, req.body)
			res.send("SUCCESS: Location deleted.")
		} else {
			res.send("ERROR: Location does not exist.")
		}
	} else {
		res.send("ERROR: Invalid location.")
	}
});

router.post('/delete/tour', function(req, res, next) {
	isDuplicate = checkDuplicate(tours, req.body.name)

	if(req.body.hasOwnProperty('name')) {
		if(isDuplicate) {
			deleteData(tours, req.body)
			res.send("SUCCESS: Tour deleted.")
		} else {
			res.send("ERROR: Tour does not exist.")
		}
	} else {
		res.send("ERROR: Invalid tour.")
	}
});

router.post('/delete/user', function(req, res, next) {
	isDuplicate = checkDuplicate(users, req.body.username)

	if(req.body.hasOwnProperty('username')) {
		if(isDuplicate) {
			deleteUser(users, req.body)
			res.send("SUCCESS: User deleted.")
		} else {
			res.send("ERROR: User does not exist.")
		}
	} else {
		res.send("ERROR: Invalid user.")
	}
});

router.post('/login', function(req, res, next) {
    isDuplicate = checkDuplicate(users, req.body.username)
    isValidLogin = validateLogin(req.body)

    if(isDuplicate && isValidLogin) {
        checkLogin = loginUser(users, req.body)
        if(checkLogin) {
            writeJson(users, "jsons/users.json")
            res.send("SUCCESS: User logged in.")
        } else {
            res.send("ERROR: Username or password is incorrect.")
        }
    } else if(!isDuplicate) {
        res.send("ERROR: User not found.")
    } else if(!isValidLogin) {
        res.send("ERROR: Invalid login.")
    } else {
        res.send("ERROR: Unknown.")
    }
});

router.post('/logout', function(req, res, next) {
    isDuplicate = checkDuplicate(users, req.body.username)
    isValidLogout = validateLogout(req.body)

    if(isDuplicate && isValidLogout) {
        checkLogout = logoutUser(users, req.body)
        if(checkLogout) {
            writeJson(users, "jsons/users.json")
            res.send("SUCCESS: User logged out.")
        } else {
            res.send("ERROR: User is already logged out.")
        }
    } else if(!isDuplicate) {
        res.send("ERROR: User not found.")
    } else if(!isValidLogin) {
        res.send("ERROR: Invalid logout.")
    } else {
        res.send("ERROR: Unknown.")
    }
});

module.exports = router;