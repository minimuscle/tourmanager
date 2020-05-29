const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/', function(req, res, next){
    tour = require("../jsons/tours.json");

    res.json({
        data: tour
    })
});

module.exports = router;