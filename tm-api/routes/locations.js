const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/', function(req, res, next){
    location = require("../jsons/locations.json");

    res.json({
        data: location
    })
});

module.exports = router;