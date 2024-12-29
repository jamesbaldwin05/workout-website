const express = require("express")

const app = express()

app.use(express.urlencoded({extended:false}))

let exercises = require("./data/exercises.json")
console.log(exercises)

app.get("/home", function(req, res){
    res.sendFile(__dirname + "/client/home.html")
})

app.get("/exercises", function(req,res){
    res.send(exercises)
})

app.get("/new", function(req, res){
    res.sendFile(__dirname + "/client/new.html")
})

module.exports = app;