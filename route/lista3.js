const express = require('express')
const router = express.Router()

router.post('/ex1', function (req, res) {
    const salario = Number(req.body.salario)

    let retorno = {}
    if (salario == 2000) {
        const srn = salario * (50 / 100)
        retorno = {
            salario: srn
        }
        res.status(200).json(retorno)
    } else {
        (salario > 2000)
        const srm = salario * (30 / 100)
        retorno = {
            salario: srm
        }
        res.status(200).json(retorno)
    }
})

router.post('/ex2', function (req, res) {
    const n1 = parseInt(req.body.n1)
    const n2 = parseInt(req.body.n2)
    const n3 = parseInt(req.body.n3)

    let maior = n1
    let retorno = {}

    if (n2 > maior) {
        maior = n2
    }

    if (n3 > maior) {
        maior = n3
    }

    retorno = { maior }

    res.status(200).json(retorno)
})

router.post('/ex3', function (req, res) {
    const pizza = 17
    const chopp = 4.8
    const cobertura = 1.5

    const pessoa = (req.body.pessoa)
    const q_chopp = (req.body.chopp)
    const q_cobertura = (req.body.cobertura)

    const c_chopp = chopp * q_chopp
    const c_cobertura = cobertura * q_cobertura
    const custo = c_cobertura + c_chopp + pizza

    const gorjeta = custo * 0.10
    const total = gorjeta + custo

    let retorno = {}

    retorno = { total }

    res.status(200).json(retorno)
})

module.exports = router