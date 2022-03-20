//Required
const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Get All Posts
router.get('/', async(req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err })
    }
});

//Submit A Post
router.post('/', async(req, res) => {
    const post = new Post({
        artist: req.body.artist,
        label: req.body.label,
        album: req.body.album,
        song: req.body.song
    });
    try {
        const savedData = await post.save();
        res.json(savedData)
    } catch (err) {
        res.json({ message: err });
    }
});

//Specific Post
router.get('/:postId', async(req, res) => {
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post);
    } catch (err) {
        res.json(err)
    }

});

//Delete Post
router.delete('/:postId', async(req, res) => {
    try {
        const removePost = await Post.remove({ _id: req.params.postId });
        res.json(removePost);
    } catch (err) {
        res.json({ message: err })
    }

});

//Update Post
router.patch('/:postId', async(req, res) => {
    try {
        const updatePost = await Post.updateOne({ _id: req.params.postId }, { $set: { song: req.body.song } });
        res.json(updatePost);
    } catch (err) {
        res.json({ message: err });
    }

})

module.exports = router;