const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const teste_lista = require('./route/teste_lista')
const introducao = require('./route/introducao')

app.use('/teste_lista', teste_lista)
app.use('/', introducao)

app.listen('3000', function () {
    console.log('executou');
}) 

