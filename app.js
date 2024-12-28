const express = require("express")

const app = express()

app.use(express.urlencoded({extended:false}))

app.get("/", function(req, res){
    console.log("Hello World")
})

module.exports = app;