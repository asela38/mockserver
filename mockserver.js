// mockserver.js

var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 8082;        // set our port

var router = express.Router();

//Mock JS file be can be place in the same directory
// with the file name using in the api json content can be accessed 
router.get('/:name', function(req, res) {

	fs.readFile('./'+ req.params.name + '.js', function (err, data) {
	  	if (err) {
	    		throw err; 
	 	}	
		console.log(data.toString());

                res.json(JSON.parse(data.toString()));   
	});
});


app.use('/api', router);

app.listen(port);
console.log('Mock Service starts at port :' + port);
