const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/lista3/ex5', function (req, res) {
    const n1 = Number(req.body.n1)
    const n2 = Number(req.body.n2)
    const n3 = Number(req.body.n3)

    const peso = Number(10)
    const media = (n1 * n2 * n3) / peso

    let retorno = {}

    retorno = {media}

    res.status(200).json(retorno)
})

app.listen('3000', function () {
    console.log('executou');
})