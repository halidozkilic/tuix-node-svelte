const express = require('express')
const router = express.Router()

const { getTroops } = require('../controllers/apiController')
const { Validate } = require('../middleware/validation')

router.post('/', Validate(), getTroops)

module.exports = router
