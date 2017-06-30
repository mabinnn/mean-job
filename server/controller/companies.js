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
            if (company) {//if company found
                console.log('company:', company);
                res.json(company);
            } else {//company not found
                console.log('company not found');
                res.json(company);
            }
        })
        .catch(error => {
            res.json(error);
        })
    },

    findCompanies: (req, res) => {
        console.log('reached findCompanies()');
        User.findOne({email: req.body.email})
        .then(user => {
            console.log('user found!');
            Company.find({_user: user._id}).sort({createdAt: -1})
            .populate('_upcomings')
            .exec()
            .then(companies => {
                console.log('companies found:', companies);
                res.json(companies);
            })
            .catch(error => {
                res.json(error);
            })
        })
        .catch(error => {
            console.log('error finding user');
            res.json(error);
        })
    },

    // req.body {
    //     name: [[name]],
    //     url: [[url]],
    //     role: [[role]],
    //     address: [[{
    //         street: [[stree]],
    //         suite: [[suite]],
    //         city: [[city]],
    //         zip: [[zip]],
    //         state: [[state]]
    //     }]],
    //     user: [[USER'S EMAIL]],
    //     status: [[status]],
    //     notes: [],
    //     contact: {
    //         name: [[name]],
    //         linkedin: [[linkedinurl]],
    //         contact_email: [[email of contact]],
    //         phone: [[contact phone num]],
    //         note: [[note]]
    //     }
    // }
    createCompany: (req, res) => {
        console.log('reached companies.js/createCompany() - company:', req.body);
        //find user matching email passed in req
        User.findOne({email: req.body.user})
        .then(user => {
            if (user) {//if user is found
            //create new company using given req data
            //and data from User.findOne()
            var new_comp = new Company({
                name: req.body.name,
                url: req.body.url,
                _user: user._id,
                address: req.body.address,
                status: req.body.status,
                notes: req.body.notes,
                role: req.body.role,
                contact: req.body.contact,
                _upcomings: []});
            console.log("new company:",new_comp);
            //save new company
            new_comp.save(new_comp)
            .then(newcompany => {
                //add company to user
                console.log('user:', user);
                user._companies.push(newcompany.id);
                console.log('user:', user);
                //save user change
                user.save(user)
                .then(data => {
                    console.log('saved company to user');
                    res.json(data);
                })
                .catch(error => {
                    console.log('error saving company to user');
                    res.json(error);
                })
            })
            .catch(error => {
                console.log('error saving new company');
                res.json(error);
            })
            } else {//user not found
                console.log('user not found, company not added');
                res.json(user);
            }
        })
        .catch(error => {
            console.log('error finding user:', error)
        })
    },

    editCompany: (req, res) => {
        console.log('reached companies/editCompany()');
        console.log('req.body:',req.body);
        Company.update({_id: req.params.id}, req.body)
        .then(company => {
            console.log('company FOUND:', company);
            if (company) {
                console.log('company updated');
                res.json(company);

            } else {
                console.log('company not updated');
                res.json(company);
            }
        })
        .catch(error => {
            console.log('error finding company');
            res.json(error);
        })
    },

    // addNote: (req, res) => {
    //     console.log('reached companies/addNote()');
    //     Company.findOne({_id: req.params.id})
    //     .then(company => {
    //         if (company) {//if company exists
    //             company.notes.push(req.body.note);
    //             company.save(company)
    //             .then(data => {
    //                 res.json(data);
    //             })
    //             .catch(error => {
    //                 res.json(error);
    //             })
    //         } else {
    //             console.log('company not found, note not added');
    //             res.json(company);
    //         }
    //     })
    //     .catch(error => {
    //         console.log('error finding company in addNote()')
    //         res.json(error);
    //     })
    // },

    deleteCompany: (req, res) => {
        console.log('!!!!!!!!!!!!!!!!!');
        console.log("COMPANY:", req.params.id);

        Company.findOne({_id: req.params.id})
        .then(company => {
            if (company) {//if company exists
                console.log("COMPANYDATA:", company);
                User.update(
                    {_id: company._user},
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
            } else {//company does not exist
                console.log('company does not exist, not deleted');
                res.json(company);
            }
        })
        .catch(error => {
            console.log('error finding company');
            res.json(error);
        })
    }
}