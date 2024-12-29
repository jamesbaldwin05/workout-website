const express = require("express")

const app = express()

app.use(express.urlencoded({extended:false}))

let exercises = require("./data/exercises.json")
console.log(exercises)

app.get("/", function(req, res){
    res.sendFile(__dirname + "/client/index.html")
})

module.exports = app;