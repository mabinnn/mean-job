/*
 * VARIABLES
 */
var mongoose = require('mongoose');
var User = mongoose.model('User');
mongoose.Promise = global.Promise;

var path = require('path');

/*
 * LOGIC
 */

module.exports = {

    // req.body {
    //     firstname: [[first name]],
    //     lastname: [[last name]],
    //     email: [[email]],
    //     password: [[password]]
    // }
    createUser: (req, res) => {
        console.log('reached createUser()');
        console.log(req.body);
        User.find({email: req.body.email})
        .then(users => {
            if (users.length == 0){
                console.log('email not found in database, adding user');
                var new_user = new User({
                    first_name: req.body.firstname,
                    last_name: req.body.lastname,
                    email: req.body.email,
                    password: req.body.password,
                    _companies: []
                });
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

    // req.body {
    //     email: [[user email]]
    // }
    findUser: (req, res) => {
        console.log('reached findUser()');
        User.findOne({email: req.body.email})
        .then(user => {
            console.log('user:', user);
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
    },
}