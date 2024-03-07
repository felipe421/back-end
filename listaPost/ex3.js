const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/lista2/ex3', function (req, res) {
    const salario = Number(req.body.salario)
    const reajuste = Number(req.body.reajuste)
    const ajuste = reajuste / 100

    const novo_salario = salario * ajuste
    let retorno = {}
    
    retorno = {salario: novo_salario}

    res.status(200).json(retorno)
})

app.listen('3000', function () {
    console.log('executou');
})