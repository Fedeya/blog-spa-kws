import { Router } from 'express'
const router = Router()

import postController from '../controllers/postCtrl'

// sending all posts
router.get('/getAll', postController.getAllPosts)

// sending one post
router.get('/getOne/:id', postController.getOnePost)

// creating a post
router.post('/add', isAuthenticated, postController.createPost)

// deleting a post
router.delete('/delete/:id', isAuthenticated, postController.deletePost)

// editing a post
router.put('/edit/:id', isAuthenticated,postController.editPost)

// liking a post
router.post('/like/:id', postController.addLike)

// get post comments
router.get('/getComments/:id', postController.getComments)

// comment a post
router.post('/comment/:id', postController.postComment)

// most popular posts
router.get('/popular', postController.getPopularPosts)

function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return next()
    } else {
        res.json({message: 'Necesitas ser administrador para entrar aqui'})
    }
}


export default router
