const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/lista2/ex5', function (req, res) {
    const cf = Number(req.body.cf)
    const pd = Number(req.body.pd)
    const imposto = Number(req.body.imposto)

    const custoDistribuidor = cf * (pd / 100)
    const custoImposto = cf * (imposto / 100)
    const custoFinal = cf + custoDistribuidor + custoImposto

    let retorno = {}

    retorno = {
        distribuidor: custoDistribuidor,
        imposto: custoImposto,
        custo_final: custoFinal
    }

    res.status(200).json(retorno)
})

app.listen('3000', function () {
    console.log('executou');
})