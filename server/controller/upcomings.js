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

    // req.body { 
    //     _company: [[company id]],
    //     followup: [[phone/onsite/etc]].
    //     note: [[note string]]
    // }
    createUpcoming: (req, res) => {
        console.log('reached createUpcoming()');
        console.log(req.body);
        console.log('companyid:', req.body._company);

        Company.findOne({_id: req.body._company})
        .then(company => {
            if (company){//company found
                console.log('company found in database, adding upcoming');
                var new_up = new Upcoming({
                    _company: req.body._company,
                    followup: req.body.followup,
                    note: req.body.note});
                new_up.save(new_up)//save
                .then(data => {
                    //add upcoming to company
                    company._upcomings.push(new_up._id);
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
            } else {//company not found
                console.log('company not found in database, upcoming not added');
                res.json(company);
            }
        })
        .catch(error => {
            console.log('error creating upcoming');
            res.json(error);
        })
    },

    deleteUpcoming: (req, res) => {
        console.log("UPCOMING:", req.params.id);

        Upcoming.findOne({_id: req.params.id})
        .then(upcoming => {
            if (upcoming) {//upcoming found
                console.log('upcomingfound:',upcoming);
                Company.update(
                    {_id: upcoming._company},
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
            } else {//upcoming not found
                console.log('upcoming not found');
                res.json(upcoming);
            }
        })
        .catch(error => {
            res.json(error);
        })
    },

    // req.body {
    //     _company: [[company id]],
    //     followup: [[phone/onsite/etc]].
    //     note: [[note string]]
    // }
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