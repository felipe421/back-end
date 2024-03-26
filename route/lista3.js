const express = require('express')
const { Http2ServerRequest } = require('http2')
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

router.post('/ex4', function (req, res) {

    const salario_minimo = (req.body.salario_minimo)
    const ht = (req.body.ht)
    const dependente = (req.body.dependente)
    const he = (req.body.he)


    const vht = salario_minimo / 5;
    const salario_m = vht * ht
    const dependente_mais = dependente * 32
    const vhe = vht * 1.5
    const she = he * vhe

    const sb = salario_m + dependente_mais + she

    let imposto
    if (sb <= 2000) {
        imposto = 0

    } else if ((sb > 2000) && (sb <= 5000)) {
        imposto = sb * 0.1
    } else {
        imposto = sb * 0.2
    }

    const sl = sb - imposto

    let graficacao
    if (sl <= 3500) {
        graficacao = 1000
    } else {
        graficacao = 500
    }

    const sr = sl + graficacao

    let retorno = {}

    retorno = { sr }

    res.status(200).json(retorno)

})

router.post('/ex5', function (req, res) {
    const nota1 = (req.body.nota1)
    const nota2 = (req.body.nota2)
    const nota3 = (req.body.nota3)

    const me = (nota1 + nota2 + nota3) / 3;
    const ma = (nota1 + nota2 * 2 + nota3 * 3 + me) / 7


    let retorno = {}
    let conceito
    if (ma >= 9) {
        conceito = 'A'
    } else if ((ma >= 7.5) && (ma < 9)) {
        conceito = 'B'
    } else if ((ma >= 6) && (ma < 7.5)) {
        conceito = 'C'
    } else if ((ma >= 4) && (ma < 6)) {
        conceito = 'D'
    } else {
        conceito = 'E'
    }

    retorno = {
        n1: nota1,
        n2: nota2,
        n3: nota3,
        media: me,
        media_aprovamento: ma,
        conceito: conceito
    }

    res.status(200).json(retorno)
})

router.post('/ex6', function (req, res) {
    const altura = (req.body.altura)
    const sexo = (req.body.sexo)

    let pesso
    let retorno
    if (sexo === 'masculino') {
        pesso = 72.7 * altura - 58
        retorno = {
            pesso
        }
    } else if (sexo === 'feminino') {
        pesso = 62.1 * altura - 44.7
        retorno = {
            pesso
        }
    } else {
        retorno = {
            messagem: 'Sexo não encontrado'
        }
    }
    res.status(200).json(retorno)
})

router.post('/ex7', function (req, res) {
    const valor1 = (req.body.valor1)
    const valor2 = (req.body.valor2)
    const valor3 = (req.body.valor3)

    let soma
    if (valor1 > valor2 && valor1 > valor3) {
        soma = valor1 + Math.max(valor2, valor3)
    } else if (valor2 > valor1 && valor2 > valor3) {
        soma = valor2 + Math.max(valor1, valor3);
    } else {
        soma = valor3 + Math.max(valor1, valor2);
    }

    let retorno

    retorno = {soma}

    res.status(200).json(retorno)
})

module.exports = router