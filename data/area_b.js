var express = require('express');
var app = express();


var area_b_description = {
	letter: "B",
	title: "Build"
}

var dimensionB1 = {
	"level": 1,
	"competence": "Application Development",
	"description": "Interprets the application design to develop a suitable application in accordance with customer needs. Adapts existing solutions by e.g. porting an application to another operating system. Codes, debugs, tests and documents and communicates product development stages. Selects appropriate technical options for development such as reusing, improving or reconfiguration of existing components. Optimises efficiency, cost and quality. Validates results with user representatives, integrates and commissions the overall solution."
}

var proficiency_B_1_1 = {
	"level": 1,
	"description": "Acts under guidance to develop, test and document applications.",
}

var proficiency_B_1_2 = {
	"level": 2,
	"description" : "Systematically develops and validates applications."
}

var proficiency_B_1_3 = {
	"level": 3,
	"description" : "Acts creatively to develop applications and to select appropriate technical options. Accounts for others development activities. Optimizes application development, maintenance and performance by employing design patterns and by reusing proved solutions."
}	


var dimensionB2 = { 
	"level": 2,
	"competence": "Component Integration",
	"description": "Nog invullen"
}

var proficiency_B_2_2 = { 
	"level": 2,
	"description": "Nog invullen",
}

var proficiency_B_2_3 = { 
	"level": 3,
	"description": "Nog invullen",
}

var proficiency_B_2_4 = { 
	"level": 4,
	"description" : "Nog invullen"
}


var dimensionB3 = { 
	"level": 3,
	"competence": "Testing",
	"description": "Nog invullen"
}

var proficiency_B_3_1 = {
	"level": 1,
	"description": "Nog invullen",
}

var proficiency_B_3_2 = { 
	"level": 2,
	"description": "Nog invullen",
}

var proficiency_B_3_3 = { 
	"level": 3,
	"description": "Nog invullen",
}

var proficiency_B_3_4 = { 
	"level": 4,
	"description" : "Nog invullen"
}



var dimensionB4 = { 
	"level": 4,
	"competence": "Solution Deployment",
	"description": "Nog invullen"
}

var proficiency_B_4_1 = {
	"level": 1,
	"description": "Nog invullen",
}

var proficiency_B_4_2 = { 
	"level": 2,
	"description": "Nog invullen",
}

var proficiency_B_4_3 = { 
	"level": 3,
	"description": "Nog invullen",
}



var dimensionB5 = { 
	"level": 5,
	"competence": "Documentation Production",
	"description": "Nog invullen"
}

var proficiency_B_5_1 = {
	"level": 1,
	"description": "Nog invullen",
}

var proficiency_B_5_2 = { 
	"level": 2,
	"description": "Nog invullen",
}

var proficiency_B_5_3 = { 
	"level": 3,
	"description": "Nog invullen",
}



var dimensionB6 = { 
	"level": 6,
	"competence": "Systems Engineering",
	"description": "Nog invullen"
}

var proficiency_B_6_3 = { 
	"level": 3,
	"description": "Nog invullen",
}

var proficiency_B_6_4 = { 
	"level": 4,
	"description": "Nog invullen",
}




// We moeten een 'diepe copy' van area_b_description hebben, anders
// passen we het oorspronkelijke object aan. 
var area_b = JSON.parse(JSON.stringify(area_b_description));


// We moeten een 'diepe copy' van area_b_description hebben, anders
// passen we het oorspronkelijke object aan. 
var area_b = JSON.parse(JSON.stringify(area_b_description));
area_b.dimensions = [
    {
        dimension: dimensionB1,
        proficiency: [ proficiency_B_1_1, proficiency_B_1_2, proficiency_B_1_3]
    },{
        dimension: dimensionB2,
        proficiency: [ proficiency_B_2_2, proficiency_B_2_3, proficiency_B_2_4]
    },{
        dimension: dimensionB3,
        proficiency: [ proficiency_B_3_1, proficiency_B_3_2, proficiency_B_3_3, proficiency_B_3_4]
    },{
        dimension: dimensionB4,
        proficiency: [ proficiency_B_4_1, proficiency_B_4_2, proficiency_B_4_3]
    },{
        dimension: dimensionB5,
        proficiency: [ proficiency_B_5_1, proficiency_B_5_2, proficiency_B_5_3]
    },{
        dimension: dimensionB6,
        proficiency: [ proficiency_B_6_3, proficiency_B_6_4]
    }]

//
// Route voor GET request op http://localhost:3000/api/hello
//
app.get('/', function(request, response){
    response.json(area_b);
});

// -----------------------------------------------------

app.get('/1', function(request, response){
    response.json({
		description: area_b_description,
		dimension: dimensionB1,
        proficiency: [ proficiency_B_1_1, proficiency_B_1_2, proficiency_B_1_3]
	});
});

app.get('/1/1', function(request, response){
    response.json({
		description: area_b_description,
		dimension: dimensionB1,
		proficiency: proficiency_B_1_1
	});
});

app.get('/1/2', function(request, response){
    response.json({
		description: area_b_description,
		dimension: dimensionB1,
		proficiency: proficiency_B_1_2
	});
});

app.get('/1/3', function(request, response){
    response.json({
		description: area_b_description,
		dimension: dimensionB1,
		proficiency: proficiency_B_1_3
	});
});

// -----------------------------------------------------

app.get('/2', function(request, response){
    response.json({
		description: area_b_description,
		dimension: dimensionB2,
		proficiency: [ proficiency_B_2_2, proficiency_B_2_3, proficiency_B_2_4]
	});
});

app.get('/2/2', function(request, response){
    response.json({
		description: area_b_description,
		dimension: dimensionB2,
		proficiency: proficiency_B_2_2
	});
});

app.get('/2/3', function(request, response){
    response.json({
		description: area_b_description,
		dimension: dimensionB2,
		proficiency: proficiency_B_2_3
	});
});

app.get('/2/4', function(request, response){
    response.json({
		description: area_b_description,
		dimension: dimensionB2,
		proficiency: proficiency_B_2_4
	});
});

// -----------------------------------------------------

app.get('/3', function(request, response){
    response.json({
		description: area_b_description,
		dimension: dimensionB3,
		proficiency: [ proficiency_B_3_1, proficiency_B_3_2, proficiency_B_3_3, proficiency_B_3_4 ]
	});
});

app.get('/3/1', function(request, response){
    response.json({
		description: area_b_description,
		dimension: dimensionB3,
		proficiency: proficiency_B_3_1
	});
});

app.get('/3/2', function(request, response){
    response.json({
		description: area_b_description,
		dimension: dimensionB3,
		proficiency: proficiency_B_3_2
	});
});

app.get('/3/3', function(request, response){
    response.json({
		description: area_b_description,
		dimension: dimensionB3,
		proficiency: proficiency_B_3_3
	});
});

app.get('/3/4', function(request, response){
    response.json({
		description: area_b_description,
		dimension: dimensionB3,
		proficiency: proficiency_B_3_4
	});
});

// -----------------------------------------------------

app.get('/4', function(request, response){
    response.json({
		description: area_b_description,
		dimension: dimensionB4,
		proficiency: [ proficiency_B_4_1, proficiency_B_4_2, proficiency_B_4_3 ]
	});
});

app.get('/4/1', function(request, response){
    response.json({
		description: area_b_description,
		dimension: dimensionB4,
		proficiency: proficiency_B_4_1
	});
});

app.get('/4/2', function(request, response){
    response.json({
		description: area_b_description,
		dimension: dimensionB4,
		proficiency: proficiency_B_4_2
	});
});

app.get('/4/3', function(request, response){
    response.json({
		description: area_b_description,
		dimension: dimensionB4,
		proficiency: proficiency_B_4_3
	});
});

// -----------------------------------------------------

app.get('/5', function(request, response){
    response.json({
		description: area_b_description,
		dimension: dimensionB5,
		proficiency: [ proficiency_B_5_1, proficiency_B_5_2, proficiency_B_5_3 ]
	});
});

app.get('/5/1', function(request, response){
    response.json({
		description: area_b_description,
		dimension: dimensionB5,
		proficiency: proficiency_B_5_1
	});
});

app.get('/5/2', function(request, response){
    response.json({
		description: area_b_description,
		dimension: dimensionB5,
		proficiency: proficiency_B_5_2
	});
});

app.get('/5/3', function(request, response){
    response.json({
		description: area_b_description,
		dimension: dimensionB5,
		proficiency: proficiency_B_5_3
	});
});

// -----------------------------------------------------

app.get('/6', function(request, response){
    response.json({
		description: area_b_description,
		dimension: dimensionB6,
		proficiency: [ proficiency_B_6_3, proficiency_B_6_4 ]
	});
});

app.get('/6/3', function(request, response){
    response.json({
		description: area_b_description,
		dimension: dimensionB6,
		proficiency: proficiency_B_6_3
	});
});

app.get('/6/4', function(request, response){
    response.json({
		description: area_b_description,
		dimension: dimensionB6,
		proficiency: proficiency_B_6_4
	});
});

// -----------------------------------------------------

// exporteer alle express app routes, en de variabele area_b.
// De variabele komt beschikbaar onder 'info'.
module.exports = { 
    routes: app,
    info: area_b
};
