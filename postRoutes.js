const express = require('express');
const router = express.Router();
const postCtrl = require('../controllers/postController');
const commentCtrl = require('../controllers/commentController');

router.get('/tag/:tag', postCtrl.getPostsByTag);  // MUST be before /:id
router.post('/', postCtrl.createPost);
router.get('/', postCtrl.getAllPosts);
router.get('/:id', postCtrl.getPostById);
router.put('/:id', postCtrl.updatePost);
router.delete('/:id', postCtrl.deletePost);

// Comment routes nested under posts
router.post('/:postId/comments', commentCtrl.addComment);
router.get('/:postId/comments', commentCtrl.getComments);

module.exports = router; 