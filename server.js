// Setup empty JS object to act as endpoint for all routes
var projectData = {};
// Express to run server and routes
var express = require('express')

// Start up an instance of app
var app = express();

/* Dependencies */
/* Middleware*/
const bodyParser = require('body-parser')

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors')
app.use(cors())
// Initialize the main project folder
app.use(express.static('website'));
// Spin up the server
const port = 8000;
const server = app.listen(port, listening)
// Callback to debug
function listening (){
    console.log("IT'S WORKING")
}

// Initialize all route with a callback function
app.get('/all', sendData)

// Callback function to complete GET '/all'
function sendData(req, res){
    res.send(projectData);
};

// Post Route
app.post('/all', addTemp);

function addTemp (req,res){

    const newTemp = {
        temperature: req.body.temperature,
        date: req.body.date,
        userResponse: req.body.userResponse
    }
    projectData = newTemp;
    res.send(projectData)
};