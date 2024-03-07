const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/lista2/ex7', function (req, res) {
    const n1 = Number(req.body.n1)
    const n2 = Number(req.body.n2)

    const p1 = 4
    const p2 = 6

    const media_ponderada = (n1 * p1 + n2 * p2) / (p1 + p2)

    let retorno = {}

    retorno = { media: media_ponderada }

    res.status(200).json(retorno)

})

app.listen('3000', function () {
    console.log('executou');
})