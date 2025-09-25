import mongoose from 'mongoose'

const PORT = process.env.PORT || 3000

async function startServer(app) {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log('Connected to Database')
        
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`)
        })
    } catch(err) {
        console.error('Failed to connect to database')
        console.error(err)
        process.exit(1)
    }
}

export default startServer