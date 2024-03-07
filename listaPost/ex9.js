const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/lista2/ex9', function (req, res) {
    const n1 = Number(req.body.n1)
    const n2 = Number(req.body.n2)

    const soma = n1 + n2
    const resultado = soma * n1

    let retorno = {}

    retorno = { Resultado: resultado }

    res.status(200).json(retorno)
})

app.listen('3000', function () {
    console.log('executou');
})