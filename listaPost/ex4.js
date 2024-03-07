const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/lista2/ex4', function (req, res){
    const cf = Number(req.body.cf)
    const pd = 28 / 100
    const imposto = 45 / 100

    const pd_cf = cf * pd
    const imposto_cf = cf * imposto
    const carro =  cf + pd_cf + imposto_cf

    let retorno = {}

    retorno = {
        porcentagem: pd_cf,
        imposto: imposto_cf,
        valor_carro: carro
    }

    res.status(200).json(retorno)
})

app.listen('3000', function () {
    console.log('executou');
})