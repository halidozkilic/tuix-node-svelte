const express = require('express')

const router = express.Router()

router.use('/getTroops', require('./apiRouter'))

module.exports = router
