// Taken from http://expressjs.com/4x/api.html
var express = require('express');

// Required for processing GET and POST parameters
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json()); // using body-parser
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/sendMessage', function(request, response) {
	// Step 0: Allow cross-origin resource sharing
	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "X-Requested-With");

	// Step 1: Process the data
	theMessage = request.body.msg;
	console.log("Someone sent a message: " + theMessage);

	// Step 2: Send a confirmation
	response.send("Thanks for playing!");
});

app.get('/', function(request, response) {
	response.send(500);
});

app.get('/pikachu', function(request, response) {
	response.send("You've won the game!");
});

app.get('/satisfaction', function(request, response) {
	response.send("You got satisfaction!");
})

// Oh joy! http://stackoverflow.com/questions/15693192/heroku-node-js-error-web-process-failed-to-bind-to-port-within-60-seconds-of
app.listen(process.env.PORT || 8888);
