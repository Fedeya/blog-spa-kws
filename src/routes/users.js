import { Router } from 'express'
import userController from '../controllers/userCtrl';
const router = Router()

// importing passport
import passport from "passport";

// register an user
router.post('/register', userController.register)

// login an user
router.post('/login', passport.authenticate('local'), userController.login)

// login out an user
router.get('/logout', userController.logout)

export default router