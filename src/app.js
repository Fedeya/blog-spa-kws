// requirements
import express from 'express'
import dotenv from 'dotenv'
const app = express()

// importing routes
import postsRoutes from './routes/posts'

// setting up the enviorement variables
dotenv.config()

// settings
app.set('port', process.env.PORT || 4000)

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes
app.use('/posts', postsRoutes)

export default app