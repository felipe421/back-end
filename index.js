const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send('rota princiapal')
})

app.get('/nome', function(req, res){
    res.send('Felipe Vieira Arcanjo')
})

app.get('/hello', function(req, res){
    res.send('chegou a reposta')
})

app.listen('3000', function () {
    console.log('executou');
})

app