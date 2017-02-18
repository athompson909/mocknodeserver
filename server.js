var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8083; // SETTING TO PORT 8083

var router = express.Router();

router.get('/test', function(req, res) {
	res.json({message: 'welcome to da api'});
});

// put more routes


app.use('/api', router);

app.listen(port);
console.log('starting on port ' + port);
