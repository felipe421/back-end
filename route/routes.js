const express = require('express')
const router = express.Router()

const teste_lista = require('./teste_lista')
const lista3 = require('./lista3')
const lista4 = require('./lista4')
const introducao = require('./introducao')

router.use('/teste_lista', teste_lista)
router.use('/lista3', lista3)
router.use('/lista4', lista4)
router.use('/', introducao)


module.exports = router