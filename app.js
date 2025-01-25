// Install express (to manage server) and fs (to read files)
const express = require("express");
const fs = require("fs");

// Create express server
const app = express();

// Middleware for express to ensure JSON read correctly
app.use(express.json()); // for testing purposes when using postman
app.use(express.urlencoded({extended:true})); // To ensure JSON read correctly from post method
app.use(express.static('client')); // To ensure bootstrap loads correctly

// Homepage route
app.get("/home", function(req, res){
    // Test whether file can be accessed, if it can then it is sent
    fs.access(__dirname + "/client/index.html", fs.constants.F_OK, (err) => {

        // If there is an error accessing the file then a 404 is sent
        if (err) {
            return res.status(404).send("404 not found. The requested resource was not found");
        }
        res.status(200).sendFile(__dirname + "/client/index.html");
    });
});

// Post method to add new exercise
app.post('/home', (req, res) => {
    fs.access(__dirname + "/data/userexercises.json", fs.constants.F_OK, (err) => {

        if (err) {
            res.status(404).send("404 not found. The requested resource was not found");
        }
        let data = [];
    
        // If json file is currently not empty then the current file is loaded to ensure no data lost/written over with fs.writeFileSync
        if (!(fs.readFileSync(__dirname + "/data/userexercises.json") == "")){
            data = JSON.parse(fs.readFileSync(__dirname + "/data/userexercises.json"));
        }

        // New exercise added
        data.push(req.body);
        
        // Data written back to file
        fs.writeFileSync(__dirname + "/data/userexercises.json", JSON.stringify(data, null , 2));

        // OK status sent
        res.status(200).sendFile(__dirname + "/client/index.html");
    });
});

// Post method to add new comment
app.post("/comment", (req, res) => {
    fs.access(__dirname + "/data/comments.json", fs.constants.F_OK, (err) => {

        if (err) {
            res.status(404).send("404 not found. The requested resource was not found");
        }
        let data = [];
    
        // If json file is currently not empty then the current file is loaded to ensure no data lost/written over with fs.writeFileSync
        if (!(fs.readFileSync(__dirname + "/data/comments.json") == "")){
            data = JSON.parse(fs.readFileSync(__dirname + "/data/comments.json"));
        }

        // New comment added
        data.push(req.body);
        
        // Data written back to file
        fs.writeFileSync(__dirname + "/data/comments.json", JSON.stringify(data, null , 2));

        // OK status sent
        res.status(303).redirect("/home");
    });
});

// Exercise API route
app.get("/api/exercises", (req,res) => {
    fs.access(__dirname + "/data/exercises.json", fs.constants.F_OK, (err) => {

        if (err) {
            return res.status(404).send("404 not found. The requested resource was not found");
        }
        res.status(200).sendFile(__dirname + "/data/exercises.json");
    });
});

// User Exercise API route
app.get("/api/userexercises", (req,res) => {
    fs.access(__dirname + "/data/userexercises.json", fs.constants.F_OK, (err) => {

        if (err) {
            return res.status(404).send("404 not found. The requested resource was not found");
        }
        res.status(200).sendFile(__dirname + "/data/userexercises.json");
    });
});

// Comments API route
app.get("/api/comments", (req,res) => {
    fs.access(__dirname + "/data/comments.json", fs.constants.F_OK, (err) => {

        if (err) {
            return res.status(404).send("404 not found. The requested resource was not found");
        }
        res.status(200).sendFile(__dirname + "/data/comments.json");
    });
});

// App added as an export to be used in server.js
module.exports = app;