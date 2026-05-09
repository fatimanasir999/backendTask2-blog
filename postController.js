const Post = require('../models/Post');
const Comment = require('../models/Comment');
const User = require('../models/User');

// POST /api/posts - Create new post
exports.createPost = async (req, res) => {
  try {
    const { title, content, author, tags } = req.body;
    const userExists = await User.findById(author);
    if (!userExists) {
      return res.status(404).json({
        success: false,
        message: 'Author not found'
      });
    }
    const post = await Post.create({ title, content, author, tags });
    res.status(201).json({
      success: true,
      message: 'Post created successfully',
      data: post
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// GET /api/posts - Get all posts with author details
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('author', 'username email');
    res.status(200).json({
      success: true,
      count: posts.length,
      data: posts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// GET /api/posts/tag/:tag - Get posts by tag
exports.getPostsByTag = async (req, res) => {
  try {
    const posts = await Post.find({ tags: req.params.tag })
      .populate('author', 'username email');
    res.status(200).json({
      success: true,
      count: posts.length,
      data: posts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// GET /api/posts/:id - Get single post with author and comments
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
      .populate('author', 'username email');
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }
    const comments = await Comment.find({ post: req.params.id })
      .populate('user', 'username');
    res.status(200).json({
      success: true,
      data: { post, comments }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// PUT /api/posts/:id - Update post
exports.updatePost = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { title, content, tags },
      { new: true, runValidators: true }
    );
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Post updated successfully',
      data: post
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// DELETE /api/posts/:id - Delete post and its comments
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Post not found'
      });
    }
    await Comment.deleteMany({ post: req.params.id });
    res.status(200).json({
      success: true,
      message: 'Post and its comments deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}; 