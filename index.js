const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('rota princiapal')
})

app.get('/hello', function (req, res) {
    res.send('chegou a reposta')
})

app.get('/lista1/ex1', function (req, res) {
    const n1 = 11
    const n2 = 10
    const n3 = 10
    const n4 = 11

    const media = (n1 + n2 + n3 + n4) / 4
    if (media > 10) {
        console.log('não pode passar de 10')
    } else {
        if (media >= 7) {
            console.log('aprovador')
        } else {
            console.log('reprovador')
        }
    }
    res.send('Lista 1 --> EX1')
})

app.listen('3000', function () {
    console.log('executou');
}) 

