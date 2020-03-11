const router = require('express').Router()
const { getBurgers, createBurger, updateBurger } = require('../controllers/burgerController.js')

// GET all items
router.get('/burgers',
  (req, res) => getBurgers(burgers => res.json(burgers)))

// POST an item
router.post('/burgers',
  (req, res) => createBurger(req.body, () => {
    res.sendStatus(200)

  }))

// PUT an item
router.put('/burgers/:id',
  (req, res) => updateBurger(req.body, req.params.id, () => res.sendStatus(200)))

module.exports = router