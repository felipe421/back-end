const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.post('/lista2/ex1', function (req, res) {
    const n1 = Number(req.body.n1)
    const n2 = Number(req.body.n2)
    const n3 = Number(req.body.n3)
    const n4 = Number(req.body.n4)

    const media = (n1 + n2 + n3 + n4) / 4
    let retorno = {}
    if (media > 10) {
        retorno = {
            codigo: 'soma_notas',
            mensagem: 'não pode passar de 10'
        }

        res.status(400).json(retorno)
    } else {
        if (media >= 7) {
            retorno = {
                mensagem: "aprovador"
            }
        } else {
            retorno = {
                mensagem: "reprovador"
            }
        }
        res.status(200).json(retorno)
    }
    res.json({ resposta: 'Lista 1 --> EX1' })
})

app.listen('3000', function () {
    console.log('executou');
})