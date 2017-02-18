var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


var port = process.env.PORT || 8083; // SETTING TO PORT 8083

var router = express.Router();

router.get('/test', function(req, res) {
	res.json({message: 'welcome to da api'});
});

// put more routes


app.use('/api', router);

app.listen(port);
console.log('starting on port ' + port);
