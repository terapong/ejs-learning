const express = require('express')
const app = expess()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index')
})
    
