const express = require('express-react-views')
const axios = require('axios')
const { join } = require('path')
const dotenv = require('dotenv').config()
const app = express()
const { getBurgers, createBurger, updateBurger } = require('./controllers/burgerController.js')

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use(require('./routes'))

app.get('/', (req, res) => {

  res.render('home')


})

app.listen(process.env.PORT || 3000)