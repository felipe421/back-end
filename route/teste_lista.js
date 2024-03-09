const express = require('express')
const router = express.Router()

router.post('/ex1', function (req, res) {
    const qminimo = Number(req.body.qminimo)
    const qmaximo = Number(req.body.qmaximo)

    const medio = (qminimo + qmaximo) / 2

    let retorno = {}

    retorno = { media: medio }

    res.status(200).json(retorno)
})

router.post('/ex2', function (req, res) {
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
module.exports = router