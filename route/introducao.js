const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.send('rota princiapal')
})

router.get('/hello', function (req, res) {
    res.send('chegou a reposta')
})

module.exports = router