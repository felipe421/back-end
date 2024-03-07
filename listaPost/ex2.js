const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/lista2/ex2', function (req, res) {
    const total = Number(req.body.total)
    const branco = Number(req.body.branco)
    const nulos = Number(req.body.nulos)
    const validos = Number(req.body.validos)

    const soma = branco + nulos + validos


    let retorno = {}
    if (soma > total) {
        retorno = {
            mensagem: 'Erro: A soma dos votos não pode passar o total de eleitores'
        }

        res.status(400).json(retorno)
    } else {
        const percbranco = branco / total * 100
        const percnulos = nulos / total * 100
        const percvalidos = validos / total * 100

        retorno = {
            branco: percbranco,
            nulos: percnulos,
            validos: percvalidos
        };

        res.status(200).json(retorno)
    }
})

app.listen('3000', function () {
    console.log('executou');
})