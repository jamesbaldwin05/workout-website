const express = require("express")

const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.static('client'))

let exercises = require("./data/exercises.json")

app.get("/home", function(req, res){
    res.sendFile(__dirname + "/client/home.html")
})

app.get("/exercises", function(req,res){
    res.send(exercises)
})

app.post("/new", function(req, res){
    console.log(req.body)
})

module.exports = app;