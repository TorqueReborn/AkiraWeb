const express = require('express')
const app = express()
const authRouter = require('./routes/authRoute')

const PORT = 3000

app.use(express.json())
app.use('/auth', authRouter)

app.get('/', (req, res) => {
    res.json({success: true, message: 'Welcome to Akira API'})
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})