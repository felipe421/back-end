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

router.post('/ex3', function (req, res) {
    const dia = Number(req.body.dia)
    const mes = Number(req.body.mes)
    const ano = Number(req.body.ano)

    const total_dia = ano * 365 + mes * 30 + dia

    let retorno = {}

    retorno = { total_dia }

    res.status(200).json(retorno)
})

router.post('/ex4', function (req, res) {
    const total_dia = Number(req.body.total_dia)

    const dia = (total_dia % 365) % 30
    const mes = (total_dia % 365) / 30
    const ano = (total_dia / 365)

    let retorno = {}

    retorno = {
        dia: dia,
        mes: mes,
        anos: ano
    }

    res.status(200).json(retorno)
})

router.post('/ex5', function (req, res) {
    const n1 = Number(req.body.n1)
    const n2 = Number(req.body.n2)
    const n3 = Number(req.body.n3)

    const p1 = 2
    const p2 = 5
    const p3 = 8

    const media = (n1 * p1 + n2 * p2 + n3 * p3) / (p1 + p2 + p3)

    let retorno = {}

    retorno = { media }

    res.status(200).json(retorno)
})

router.post('/ex6', function (req, res) {
    const segundos = Number(req.body.segundos)

    const horas = (segundos / 3600)
    const minutos = ((segundos % 3600) / 60)
    const segundos_restante = segundos % 60

    let retorno = {}

    retorno = {
        horas: horas,
        minutos: minutos,
        faltando: segundos_restante
    }

    res.status(200).json(retorno)
})

router.post('/ex7', function (req, res) {
    const nome = req.body.nome
    const salario = Number(req.body.salario)
    const vendas = Number(req.body.vendas)
    const ponceitual = Number(req.body.ponceitual)

    const comissao = vendas * (ponceitual / 100)
    const total = salario + comissao

    let retorno = {}

    retorno = {
        nome: nome,
        salario_total: total
    }

    res.status(200).json(retorno)

})

router.post('/ex8', function (req, res) {
    const nome = req.body.nome
    const d = Number(req.body.d)
    const t = Number(req.body.t)

    const vm = d / t

    let retorno = {}

    retorno = {
        nome: nome,
        velocidade_media: vm
    }

    res.status(200).json(retorno)
})

router.post('/ex9', function (req, res) {
    const salario = Number(req.body.salario)

    let retorno = {}
    if (salario < 1000) {
        const total = salario * 1.3
        retorno = {
            salario_total: total
        }
        res.status(200).json(retorno)
    } else {
        retorno = {
            mensagem: 'não tem direito'
        }
        res.status(400).json(retorno)
    }

})

module.exports = router