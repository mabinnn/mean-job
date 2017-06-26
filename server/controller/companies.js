/*
 * VARIABLES
 */
var mongoose = require('mongoose');
var Company = mongoose.model('Company');
mongoose.Promise = global.Promise;

var path = require('path');

/*
 * LOGIC
 */

module.exports = {

    findCompany: (req, res) => {
        console.log('reached findUser()');
        Company.findOne({_id: req.params.id})
        .populate('_contacts')
        .exec()
        .then(company => {
            console.log('company:', company);
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
    },
}