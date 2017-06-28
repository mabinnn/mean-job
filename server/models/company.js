/*
 * COMPANY MODEL 
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
//create schema
var CompanySchema = new mongoose.Schema({
    name: {type: String, required: true},
    link: {type: String, required: true},
    role: {type: String, required: true},
    address: {
        street: {type: String, required: true},
        suite: {type: String},
        city: {type: String, required: true},
        zip: {type: Number},
        state: {type: String, required: true}
    },
    _upcomings: [{type: Schema.Types.ObjectId, ref: 'Upcoming'}],
    _user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    status: {type: String},
    notes: [{type: String}],
    contact: {
        name: {type: String},
        linkedin: {type: String},
        email: {type: String},
        phone: {type: String},
        notes: [{type: String}]
    }
}, {timestamp: true});

//register schema as model
var Company = mongoose.model('Company', CompanySchema);