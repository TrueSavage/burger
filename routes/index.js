const router = require('express').Router()

router.use('/api', require('./burgerRoutes.js.js'))

module.exports = router