const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/lista2/ex6', function (req, res) {
    const cv = Number(req.body.cv)
    const vtv = Number(req.body.vtv)
    const sf = Number(req.body.sf)
    const vc = Number(req.body.vc)

    const cc = cv * vc
    const ct = vtv * 0.05
    const st = sf + cc + ct

    let retorno = {}

    retorno = { salario: st }

    res.status(200).json(retorno)
})

app.listen('3000', function () {
    console.log('executou');
})