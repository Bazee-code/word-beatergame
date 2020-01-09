// our game will be hosted on the express server below
const express = require('express');
const http = require('http');

// create express app
let app = express();
const server = http.createServer(app);
// create express middleware to access our game
app.use(express.static('./client'));

// bind app to port
server.listen(3000,()=>{
	console.log("Successfully connected to port 3000!");
});