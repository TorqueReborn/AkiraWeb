const express = require('express')
const router = express.Router()

router.post('/signup', (req, res) => {
    res.json({ success: true, message: 'You are inside signup' })
})

module.exports = router