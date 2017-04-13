var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));


var area_a_description = {
	title: "Plan",
	letter: "A"
}

var dimensionA1 = {
	"level": 1,
	"competence": "IS and Business Strategy Alignment",
	"description": "Anticipates long term business requirements, influences improvement of organisational process efficiency and effectivenes. Determines the IS model and the enterprise architecture in line with the organisation’s policy and ensures a secure environment. Makes strategic IS policy decisions for the enterprise, including sourcing strategies."
}

var proficiency_A_1_4 = {
	"level": 4,
	"description": "Provides leadership for the construction and implementation of long term innovative IS solutions.",
}

var proficiency_A_1_5 = {
	"level": 5,
	"description" : "Provides IS strategic leadership to reach consensus and commitment from the management team of the enterprise."
}

var dimensionA2 = { 
	"level": 2,
	"competence": "Service Level Management",
	"description": "Defines, validates and makes applicable service level agreements (SLAs) and underpinning contracts for services offered. Negotiates service performance levels taking into account the needs and capacity of stakeholders and business. "
}

var proficiency_A_2_3 = { 
	"level": 3,
	"description": "Ensures the content of the SLA.",
}

var proficiency_A_2_4 = { 
	"level": 4,
	"description" : "Negotiates revision of SLAs, in accordance with the overall objectives. Ensures the achievement of planned results."
}

var area_a = {
	"description": area_a_description,
	"dimensions": [
		{
			dimension: dimensionA1,
			proficiency: [ proficiency_A_1_4, proficiency_A_1_5]
		},{
			dimension: dimensionA2,
			proficiency: [ proficiency_A_2_3, proficiency_A_2_4]
		}]
}

//
// Route voor GET request op http://localhost:3000/api/hello
//
app.get('/api/a', function(request, response){
    response.json(area_a);
});

// var a_1 = {}
// a_1["description"] = area_a_description;
// a_1["dimension"] = dimensionA1;
// a_1.proficiency = [
// 	proficiency_A_1_4, 
// 	proficiency_A_1_5
// ]

app.get('/api/a/1', function(request, response){
    response.json({
		description: area_a_description,
		dimension: dimensionA1,
		proficiency: [ proficiency_A_1_4, proficiency_A_1_5]
	});
});

app.get('/api/a/1/4', function(request, response){
    response.json({
		description: area_a_description,
		dimension: dimensionA1,
		proficiency: proficiency_A_1_4
	});
});

app.get('/api/a/1/5', function(request, response){
    response.json({
		description: area_a_description,
		dimension: dimensionA1,
		proficiency: proficiency_A_1_4
	});
});

app.get('/api/a/2', function(request, response){
    response.json({
		description: area_a_description,
		dimension: dimensionA2,
		proficiency: [ proficiency_A_2_3, proficiency_A_2_4]
	});
});

app.get('/api/a/2/3', function(request, response){
    response.json({
		description: area_a_description,
		dimension: dimensionA2,
		proficiency: proficiency_A_2_3
	});
});

app.get('/api/a/2/4', function(request, response){
    response.json({
		description: area_a_description,
		dimension: dimensionA2,
		proficiency: proficiency_A_2_4
	});
});


var allAreas = [area_a, "item2"];

app.get(['/', '/api'], function(request, response) {
	response.send(allAreas);
});


//
// start the server
//
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


