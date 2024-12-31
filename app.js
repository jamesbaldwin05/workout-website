const express = require("express")
const fs = require("fs")

const app = express()

app.use(express.json())
app.use(express.static('client'))

let exercises = require("./data/exercises.json")

app.get("/home", function(req, res){
    res.sendFile(__dirname + "/client/home.html")
})

app.get("/exercises", function(req,res){
    res.send(exercises)
})

app.get("/new", function(req, res){
    res.sendFile(__dirname + "/client/new.html")
})

app.post('/submit', (req, res) => {
    let data = []
    
    if (!(fs.readFileSync(__dirname + "/data/userexercises.json") == "")){
          data = JSON.parse(fs.readFileSync(__dirname + "/data/userexercises.json"))
    }

    data.push(req.body)
    
    fs.writeFileSync(__dirname + "/data/userexercises.json", JSON.stringify(data))
    
    res.sendStatus(200)
})

module.exports = app