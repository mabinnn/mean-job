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
            var new_comp = new Company({name: req.body.name, url: req.body.url, _contacts: [], _user: user.id, address: rew.body.address, upcoming: req.body.upcoming, notes: req.body.notes, role: erq.body.role});
            console.log("new company:",new_comp);

            // new_comp.save(new_comp)
            //     //'topic' below must NOT be named data for nesting
            //     .then(topic => {
            //         //add topic to user
            //         console.log("user:",data);
            //         data._topics.push(topic.id);
            //         console.log("user:", data);

            //         data.save(data)
            //         .then(data => {
            //             res.json(data);
            //         })
            //         .catch(error => {
            //             res.json(error);
            //         })
            //     })
            //     .catch(error => {
            //         console.log('error adding topic');
            //         res.json(error);
            //     })
        })
        .catch(error => {
            console.log('error finding topic:', error)
        })
    }
}