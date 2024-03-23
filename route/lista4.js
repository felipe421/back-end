const express = require('express')
const router = express.Router()

router.post('/ex1', function (req, res) {
    const numeros = req.body.numeros

    let soma = 0 
    for (let i of numeros) {
        soma += i
    }

    const media = soma / numeros.length

    res.json({ media })
})

module.exports = router