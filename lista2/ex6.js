const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.

app.listen('3000', function () {
    console.log('executou');
})