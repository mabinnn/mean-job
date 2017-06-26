/*
 * VARIABLES
 */
var bcrypt = require('bcrypt');
var mongoose = require('mongoose');
var User = mongoose.model('User');
mongoose.Promise = global.Promise;

var path = require('path');

/*
 * LOGIC
 */

module.exports = {

    createUser: (req, res) => {
        console.log('reached createUser()');
        console.log(req.body);
        User.find({email: req.body.email})
        .then(users => {
            if (users.length == 0){
                console.log('email not found in database, adding user');
                var new_user = new User();
            } else {
                console.log('email found in database, user NOT added');
                res.json(users);
            }
        })
        .catch(error => {
            console.log('error creating user');
            res.json(error);
        })
    },

    findUser: (req, res) => {
        console.log('reached findUser()');
        User.findOne({_id: req.params.id})
        .then(user => {
            console.log('user:', user);
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
    },
}

createUser: (req, res) => {
        console.log('reached users.js/createUser() - user:', req.body.username);
        User.find({username: req.body.username})
        .then(data => {
            console.log("data:",data);
            if (data.length == 0){
                console.log('user not found in database, adding user');
                var user = new User({username: req.body.username, _topics: [], _answers: [], _comments: []});
                console.log(user);
                user.save(user)
                .then(data => {
                    console.log('success! added user');
                    res.json(data);
                })
                .catch(error => {
                    console.log('error adding user');
                    res.json(error);
                })
            } else {
                console.log('user found in database, user not added');
                res.json(data);
            }
        })
        .catch(error => {
            console.log('error finding user:', error);
            res.json(error);
        })
    }