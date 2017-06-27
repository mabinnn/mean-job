/*
 * COMPANY MODEL 
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
//create schema
var CompanySchema = new mongoose.Schema({
    name: {type: String},
    link: {type: String},
    role: {type: String},
    address: {
        street: {type: String},
        suite: {type: String},
        city: {type: String},
        zip: {type: Number},
        state: {type: String}
    },
    _upcomings: [{type: Schema.Types.ObjectId, ref: 'Upcoming'}],
    status: {type: String},
    notes: [{type: String}],
    contact: {
        name: {type: String},
        linkedin: {type: String},
        email: {type: String},
        phone: {type: String},
        note: [{type: String}]
    }
}, {timestamp: true});

//register schema as model
var Company = mongoose.model('Company', CompanySchema);