const express = require('express');
const request = require('request');
const router = express.Router();

router.get('/', function(req, res, next){
	let dataArray = [
        { name: "john", age: '12'},
        { name: "jake", age: '13'},
        { name: "james", age: '14'},
        { name: "jimmy", age: '16'}
    ]

    res.json({
        data: dataArray
    })
});

module.exports = router;