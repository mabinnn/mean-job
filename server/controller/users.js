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

    readUsers: (req, res) => {
        User.find({})
        .then(data => {
            console.log('success in users.js/index()');
            console.log(data);
            res.json(data);
        })
        .catch(err => {
            console.log('error in users.js/index()');
            res.json(err);
        })
    },
}