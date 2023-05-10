const express = require('express');
const controller = express.Router();

// Import data here, code should look like below ex:
	// const sampleData = require('../sampleData.json');

// ** Inital command to see if route: ("/sample") works
controller.get("/", (request, response) => {
	response.send("Hello from the samples controller")
});

// ** Same code as above, but edited as JSON:
// controller.get("/", (request, response) => {
//	response.json({hello: "world"})
// });

// When the data from lines 4-5 is available, do the below command:
	// controller.get("/", (request, response) => {
	// 	response.json(sampleData)
	// });

// Below route accepts a sample Id as part of the path, 
// returning an object (JSON), representing the item with that ID
controller.get("/:id", (request, response) => {
	try {
		const sampleId = request.params.id
	
		// test to make sure 'id' is an integer
		if(typeof sampleId !== 'number') return response.send("sample id must be a number")	
		
		//regex - test version
		// if(!/[0-9]/.test(sampleId)) return response.send("sample id must be a number")	
	
		const singleSample = sampleData.find(sample => {
			// works because both id's are the same data type 
			return sample.id === sampleId
		})
		if(singleSample){
			response.json(singleSample);
		} else {
			response.send("sample not found")
		}
	} catch (err) {
		response.status(500).send("An error occured")
	}
});

module.export = controller;
// ^sends routes back to app.js