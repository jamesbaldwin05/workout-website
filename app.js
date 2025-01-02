// Install express (to manage server) and fs (to read files)
const express = require("express")
const fs = require("fs")

// Create express server
const app = express()

// Middleware for express to ensure JSON read correctly
app.use(express.json()) // for testing purposes when I was using postman
app.use(express.urlencoded({extended:true})) // To ensure JSON read correctly from post method
app.use(express.static('client')) // To ensure bootstrap loaded correctly
app.use((req,res) =>
    res.status(404).send("404 not found. The requested resource was not found")
) // Any url without a route results in a 404 error.


// Homepage route
app.get("/home", function(req, res){
    // Test whether file can be accessed, if it can then it is sent
    fs.access(__dirname + "/client/home.html", fs.constants.F_OK, (err) => {

        // If there is an error accessing the file then a 404 is sent
        if (err) {
            return res.status(404).send("404 not found. The requested resource was not found")
        }
        res.status(200).sendFile(__dirname + "/client/home.html")
    })
})

// Exercise route
app.get("/exercises", (req, res) => {
    fs.access(__dirname + "/client/exercises.html", fs.constants.F_OK, (err) => {

        if (err) {
            return res.status(404).send("404 not found. The requested resource was not found")
        }
        res.status(200).sendFile(__dirname + "/client/exercises.html")
    })
})

// User exercise route
app.get("/userexercises", (req, res) => {
    fs.access(__dirname + "/client/userexercises.html", fs.constants.F_OK, (err) => {

        if (err) {
            return res.status(404).send("404 not found. The requested resource was not found")
        }
        res.status(200).sendFile(__dirname + "/client/userexercises.html")
    })
})


// Exercise API route
app.get("/api/exercises", (req,res) => {
    fs.access(__dirname + "/data/exercises.json", fs.constants.F_OK, (err) => {

        if (err) {
            return res.status(404).send("404 not found. The requested resource was not found")
        }
        res.status(200).sendFile(__dirname + "/data/exercises.json")
    })
})

// User Exercise API route
app.get("/api/userexercises", (req,res) => {
    fs.access(__dirname + "/data/userexercises.json", fs.constants.F_OK, (err) => {

        if (err) {
            return res.status(404).send("404 not found. The requested resource was not found")
        }
        res.status(200).sendFile(__dirname + "/data/userexercises.json")
    })
})

// Get method to provide form to add new exercise
app.get("/new", (req, res) => {
    fs.access(__dirname + "/client/new.html", fs.constants.F_OK, (err) => {

        if (err) {
            return res.status(404).send("404 not found. The requested resource was not found")
        }
        res.status(200).sendFile(__dirname + "/client/new.html")
    })
    res.sendFile(__dirname + "/client/new.html")
})

// Post method to add new exercise
app.post('/new', (req, res) => {
    fs.access(__dirname + "/data/userexercises.json", fs.constants.F_OK, (err) => {
        
        if (err) {
            res.status(404).send("404 not found. The requested resource was not found")
        }
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
        res.status(200).send("New exercise added successfully.")
    })
})

// App added as an export to be used in server.js
module.exports = app