const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Initialise body parser
app.use(bodyParser.json());

//Initialise routes
app.use('/api', require('./routes/api'));

//Listen for requests
app.listen(process.env.port || 9000, function(){
	console.log('Listening for requests...');
});