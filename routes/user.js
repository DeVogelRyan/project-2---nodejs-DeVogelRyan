const express = require('express');
const Router = express.Router();
const User = require('../models/User');
const {
    validateTypeUser,
    validateUserPhoneNumber,
    validateUserEmail
} = require('../validate/validate');



//source: https://www.w3resource.com/mongodb/mongodb-skip-limit.php
Router.get('/', async (req, res) => { //Get all Users
    try {
        const Users = await User.find();
        res.json({
            Users: Users
        });
    } catch (err) {
        res.json({
            message: err
        })
    }
});

Router.get('/email', async (req, res) => { //Get User by ID
    try {
        console.log(req.query.UserEmail)
        User.findOne({
            email: req.query.UserEmail
        }, async function (err, existingUser) {
            if (existingUser) {
                const user = await User.findOne({
                    email: req.query.UserEmail
                });
                res.json(user)
            } else {
                res.json({
                    message: "no users found with that email!"
                })
            }
        })
    } catch (err) {
        res.json({
            message: err
        })
    }
});

Router.get('/sorted', async (req, res) => { //Get all the users
    try {
        const Users = await User.find().sort({username:-1});//sort them
        res.json({
            Users: Users
        });
    } catch (err) {
        res.json({
            message: err
        })
    }
});



Router.get('/:UserID', async (req, res) => { //Get User by ID
    try {
        User.findOne({//source: http://ostack.cn/?qa=259390/node-js-check-if-id-exists-in-a-collection-with-mongoose
            _id: req.params.UserID
        }, async function (err, existingUser) {
            if (existingUser) {
                const user = await User.findById(req.params.UserID);
                res.json(user)
            } else {
                res.json({
                    message: "no users found with that ID!"
                })
            }
        })
    } catch (err) {
        res.json({
            message: err
        })
    }
});


Router.post('/', validateTypeUser, validateUserPhoneNumber, validateUserEmail, async (req, res) => { //Post a new User
    try {
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
        })
        User.findOne({
            email: req.body.email
        }, async function (err, existingUser) {//check if a user with that email already exists
            if (existingUser) {
               
                res.json({message: "A user with that email already exists!"})
            } else {
                const savedUser = await user.save();
                res.json(savedUser);
            }
        })
    } catch (err) {
        res.json({
            message: err
        })
    }

});



Router.delete('/:UserID', async (req, res) => { //Delete an User
    try {
        const removeUser = await User.deleteOne({
            _id: req.params.UserID
        })
        res.json(removeUser);
    } catch (err) {
        res.json({
            message: err
        })
    }
});

Router.put('/:UserID', async (req, res) => { //Update an User
    try {
        const updateUser = await User.updateOne({
            _id: req.params.UserID
        }, {
            $set: {
                User: req.body.User,
                for: req.body.for
            }
        })
        res.json(updateUser);
    } catch (err) {
        res.json({
            message: err
        })
    }
});


module.exports = Router;