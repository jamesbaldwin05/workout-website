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
    const {name, muscle, difficulty, equipment} = req.body

    const data = {name, muscle, difficulty, equipment}

    fs.writeFileSync(__dirname + "/data/userexercises.json", JSON.stringify(data))

    res.send("Recieved the form data: Name -" + name + ", Muscle - " + muscle + ", Difficulty - " + difficulty + ", Equipment - " + equipment)
})

module.exports = app