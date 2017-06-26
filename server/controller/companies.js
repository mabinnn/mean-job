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

    createCompany: (req, res) => {
        console.log('reached companies.js/createCompany() - company:', req.body);
        //find user matching email passed in req
        User.findOne({email: req.body.email})
        .then(user => {
            //create new company using given req data
            //and data from User.findOne()
            var new_comp = new Company({name: req.body.name, url: req.body.url, _contacts: [], _user: user.id, address: req.body.address, upcoming: req.body.upcoming, notes: req.body.notes, role: req.body.role});
            console.log("new company:",new_comp);
            //save new company
            new_comp.save(new_comp)
            .then(company => {
                //add company to user
                console.log('user:', user);
                user._companies.push(company.id);
                console.log('user:', user);
                //save user change
                user.save(user)
                .then(data => {
                    console.log('saved user change');
                    res.json(data);
                })
                .catch(error => {
                    console.log('error saving user change');
                    res.json(error);
                })
            })
            .catch(error => {
                console.log('error saving new company');
                res.json(error);
            })
        })
        .catch(error => {
            console.log('error finding topic:', error)
        })
    }
}