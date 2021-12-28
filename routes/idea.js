const express = require('express');
const Router = express.Router();
const Idea = require('../models/Idea');
const validate = require('../validate/validateRequests');


//source: https://www.w3resource.com/mongodb/mongodb-skip-limit.php
Router.get('/', async (req, res) => { //Get all ideas
    try {
        const ideas = await Idea.find();
        res.json({Ideas: ideas});
    } catch (err) {
        res.json({
            message: err
        })
    }
});

Router.get('/specific', validate, async (req, res) => { //Get all ideas
    try {
        console.log(req.query.limit);
        const offset = parseInt(req.query.offset);
        const limit = parseInt(req.query.limit);
        const ideas = await Idea.find().skip(offset).limit(limit);
        res.json({Limit: limit, Offset: offset,Ideas: ideas});
    } catch (err) {
        res.json({
            message: err
        })
    }

});

Router.get('/:ideaID', async (req, res) => { //Get idea by ID
    try {
        if(Idea.findById(req.params.ideaID).limit(1).size() > 0){
            const idea = await Idea.findById(req.params.ideaID);
            res.json(idea);
        }
        else {
            res.json({
                message: "no items found with that ID!"
            })
        }
    } catch (err) {
        res.json({
            message: err
        })
    }
});


Router.post('/',  async (req, res) => { //Post a new idea
    const idea = new Idea({
        idea: req.body.idea,
        for: req.body.for,
    })
    try {
        const savedidea = await idea.save();
        res.json(savedidea);
    } catch (err) {
        res.json({
            message: err
        })
    }

});



Router.delete('/:ideaID', async (req, res) => { //Delete an idea
    try {
        const removeidea = await Idea.deleteOne({
            _id: req.params.ideaID
        })
        res.json(removeidea);
    } catch (err) {
        res.json({
            message: err
        })
    }
});

Router.put('/:ideaID', async (req, res) => { //Update an idea
    try {
        const updateidea = await Idea.updateOne({
            _id: req.params.ideaID
        }, {
            $set: {
                idea: req.body.idea,
                for: req.body.for
            }
        })
        res.json(updateidea);
    } catch (err) {
        res.json({
            message: err
        })
    }
});


module.exports = Router;