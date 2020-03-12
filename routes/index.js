const router = require('express').Router()

router.use('/api', require('./burgerRoutes.js'))

module.exports = router