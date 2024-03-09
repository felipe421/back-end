const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/lista3/ex2', function (req, res) {
    const nome = req.body.nome
    const hora = Number(req.body.hora)
    const filho = Number(req.body.filho)

    const valor = hora * 100
    const salario = valor * (0.3 * filho)

    let retorno = {}

    retorno = {
        nome: nome,
        hora: hora,
        filho: filho,
        valor: valor,
        salario: salario
    }

    res.status(200).json(retorno)
})

app.listen('3000', function () {
    console.log('executou');
})