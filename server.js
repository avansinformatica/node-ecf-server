var express = require('express');
// Cors zorgt dat we vanaf een andere host naar deze server mogen praten
var cors = require('cors');
var area_a = require('./data/area_a');
var area_b = require('./data/area_b');

var app = express();

// cross origin resource sharing
app.use(cors());

app.set('port', (process.env.PORT || 3000));

var allAreas = [ 
	area_a.info, 
	area_b.info 
];

app.get(['/', '/api'], function(request, response) {
	response.send(allAreas);
});

// configureer de routes
app.use('/api/a', area_a.routes);
app.use('/api/b', area_b.routes);

//
// start the server
//
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


