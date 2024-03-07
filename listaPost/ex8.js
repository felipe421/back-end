const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/lista2/ex8', function (req, res) {
    const raio = Number(req.body.raio)
    const altura = Number(req.body.altura)
    const pi = 3.14

    const volume = pi * (raio ^ 2 * altura)

    let retorno = {}

    retorno = { volume: volume}

    res.status(200).json(retorno)
})

app.listen('3000', function () {
    console.log('executou');
})