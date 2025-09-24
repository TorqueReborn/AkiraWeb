const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.json({success: true, message: 'Welcome to Akira API'})
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})