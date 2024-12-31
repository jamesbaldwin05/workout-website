// Install express (to manage server) and fs (to read files)
const express = require("express")
const fs = require("fs")

// Create express server
const app = express()

// Middleware for express to ensure JSON read correctly
app.use(express.json()) // for testing purposes when I was using postman
app.use(express.urlencoded({extended:true}))
app.use(express.static('client'))

// Pre written exercises loaded to be used in exercise route
let exercises = require("./data/exercises.json")

// Homepage route
app.get("/home", function(req, res){
    res.sendFile(__dirname + "/client/home.html")
})

// Exercise route
app.get("/exercises", function(req,res){
    res.send(exercises)
})

// Get method to provide form to add new exercise
app.get("/new", function(req, res){
    res.sendFile(__dirname + "/client/new.html")
})

// Post method to add new exercise
app.post('/new', (req, res) => {
    console.log(req.body)
    let data = []
    
    // If json file is currently not empty then the current file is loaded to ensure no data lost/written over with fs.writeFileSync
    if (!(fs.readFileSync(__dirname + "/data/userexercises.json") == "")){
          data = JSON.parse(fs.readFileSync(__dirname + "/data/userexercises.json"))
    }

    // New exercise added
    data.push(req.body)
    
    // Data written back to file
    fs.writeFileSync(__dirname + "/data/userexercises.json", JSON.stringify(data, null , 2))

    // OK status sent
    res.sendStatus(200)
})

// App added as an export to be used in server.js
module.exports = app