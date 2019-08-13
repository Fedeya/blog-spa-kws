// requirements
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import session from 'express-session'
import passport from 'passport'
const app = express()

// importing routes
import postsRoutes from './routes/posts'
import usersRoutes from './routes/users'

// setting up the enviorement variables
dotenv.config()

// passport config
import passportConfig from './passport'
passportConfig(passport)

// settings
app.set('port', process.env.PORT || 4000)

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// session
app.use(session({
    secret: 'secretsession',
    resave: true,
    saveUninitialized: true
}));

// passport initialize
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/posts', postsRoutes)
app.use('/users', usersRoutes)

export default app