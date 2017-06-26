/*
 * VARIABLES
 */
var mongoose = require('mongoose');
var Company = mongoose.model('Company');
var User = mongoose.model('User');
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
            var new_comp = new Company({name: req.body.name, url: req.body.url, _user: user.id, address: req.body.address, upcoming: req.body.upcoming, status: req.body.status, notes: req.body.notes, role: req.body.role, contact: req.body.contact});
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
    },

    addNote: (req, res) => {
        Company.findOne({_id: req.params.id})
        .then(company => {
            company.notes.push(req.body.note);
            company.save(company)
            .then(data => {
                res.json(data);
            })
            .catch(error => {
                res.json(error);
            })
        })
        .catch(error => {
            res.json(error);
        })
    },

    deleteCompany: (req, res) => {
        console.log("USER:", req.body,user);
        console.log("COMPANY:", req.params.id);

        Company.findOne({_id: req.params.id})
        .then(company => {
            console.log("COMPANYDATA:", company);
            User.update(
                {email: req.body.email},
                {$pull: {_companies:{$in: [company._id]}}})
            .then(data => {
                console.log('removed company from user');
                Company.deleteOne({_id: req.params.id})
                .then(data => {
                    console.log('company deleted');
                    res.json(data);
                })
                .catch(error => {
                    console.log('error deleting company');
                    res.json(error);
                })
            })
            .catch(error => {
                console.log('error removing company from user')
                res.json(error);
            })
        })
        .catch(error => {
            console.log('error finding company');
            res.json(error);
        })
    }
}