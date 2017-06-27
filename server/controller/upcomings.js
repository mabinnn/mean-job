/*
 * VARIABLES
 */
var mongoose = require('mongoose');
var Upcoming = mongoose.model('Upcoming');
var Company = mongoose.model('Company');
mongoose.Promise = global.Promise;

var path = require('path');

/*
 * LOGIC
 */

module.exports = {
    createUpcoming: (req, res) => {
        console.log('reached createUpcoming()');
        console.log(req.body);
        console.log('companyid:', req.params.id);
        Company.findOne({_id: req.params.id})
        .then(company => {
            if (company == {}){
                console.log('company not found in database, upcoming not added');
            } else {
                console.log('company found in database, adding upcoming');
                var new_up = new Upcoming({_company: company._id, followup: req.body.followup, note: req.body.note});
                new_up.save(new_up)//save
                .then(data => {
                    //add upcoming to company
                    company._upcomings.push(new_up);
                    company.save(company)//save
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
            }
        })
        .catch(error => {
            console.log('error creating upcoming');
            res.json(error);
        })
    },

    deleteUpcoming: (req, res) => {
        console.log("UPCOMING:", req.params.id);
        console.log('COMPANY:', req.body.company);

        Upcoming.findOne({_id: req.params.id})
        .then(upcoming => {
            console.log('upcomingfound:',upcoming);
            Company.update(
                {_id: req.body.company},
                {$pull: {_upcomings: {$in: [upcoming._id]}}})
            .then(data => {
                console.log('removed upcoming from company');
                Upcoming.deleteOne({_id: req.params.id})
                .then(data => {
                    console.log('upcoming deleted');
                    res.json(data);
                })
                .catch(error => {
                    res.json(error);
                })
            })
            .catch(error => {
                res.json(error);
            })
        })
        .catch(error => {
            res.json(error);
        })
    },

    editUpcoming: (req, res) => {
        console.log('upcoming:', req.body);
        Upcoming.update({_id: req.params.id}, req.body)
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
    }
}