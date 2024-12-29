const express = require("express")

const app = express()

app.use(express.urlencoded({extended:false}))

let exercises = require("./data/exercises.json")
console.log(exercises)

app.get("/home", function(req, res){
    res.sendFile(__dirname + "/client/index.html")
})

app.get("/exercises", function(req,res){
    res.sendFile(__dirname + "/data/exercises.json")
})

module.exports = app;