import express from 'express'
import { configDotenv } from 'dotenv'

configDotenv()
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (_, res) => {
    res.json({message: 'Server is running'})
})

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`)
})