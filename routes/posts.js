const express = require('express');
const Router = express.Router();
const Post = require('../models/Post')

Router.get('/', (req, res) => {
    res.send('We are on posts!');
});

Router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    })
    try{
    const savedPost = await post.save();
    res.json(savedPost);
    }catch(err){
        res.json({message: err})
    }
});

module.exports = Router;