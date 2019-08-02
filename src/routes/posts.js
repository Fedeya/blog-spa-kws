import { Router } from 'express'
const router = Router()

import postController from '../controllers/postCtrl'

// sending all posts
router.get('/', postController.getAllPosts)

// sending one post
router.get('/:id', postController.getOnePost)

// creating a post
router.post('/add', postController.createPost)

// deleting a post
router.delete('/delete/:id', postController.deletePost)

// editing a post
router.put('/edit/:id', postController.editPost)

// liking a post
router.post('/:id/like', postController.addLike)


// most popular posts
router.get('/popular', postController.getPopularPosts)


export default router
