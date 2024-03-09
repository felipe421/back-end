const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/lista3/ex3', function (req, res) {
    const dia = Number(req.body.dia)
    const mes = Number(req.body.mes)
    const ano = Number(req.body.ano)

    const total_dia = ano * 365 + mes * 30 + dia

    let retorno = {}

    retorno = {total_dia}

    res.status(200).json(retorno)
})

app.listen('3000', function () {
    console.log('executou');
})