// import code for express
const express = require('express');

// import code for cors
const cors = require('cors')

// initialize app
const app = express();

// controller
const sampleController = require("./controllers/sampleController");

app.use(cors())
app.use("/sample", sampleController);

// route
app.get('/', (req, res) => {
	// callback
	res.send("Hello world!")
});

// exporting app
module.exports = app;