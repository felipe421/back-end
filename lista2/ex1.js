const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.post('/lista3/ex1', function(req, res){
    const qminimo = Number(req.body.qminimo)
    const qmaximo = Number(req.body.qmaximo)

    const medio = (qminimo + qmaximo) /2

    let retorno = {}

    retorno = {media: medio}

    res.status(200).json(retorno)
})

app.listen('3000', function () {
    console.log('executou');
})