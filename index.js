const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/multiplelive.html') 
})

app.listen(3000, (req, res) => {
    console.log('server is running')
})