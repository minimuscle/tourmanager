const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/', function(req, res, next){
	user = require("../jsons/users.json");

    res.json({
        data: user
    })
});

module.exports = router;