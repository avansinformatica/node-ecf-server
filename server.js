var express = require('express');
var app = express();
var area_a = require('./data/area_a');

app.set('port', (process.env.PORT || 3000));

var allAreas = [ 
	area_a.info, 
	"item2" 
];

app.get(['/', '/api'], function(request, response) {
	response.send(allAreas);
});

// configureer de routes
app.use('/api/a', area_a.routes);

//
// start the server
//
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


