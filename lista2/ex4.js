const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/lista3/ex4', function (req, res) {
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

app.listen('3000', function () {
    console.log('executou');
})