/*
 * COMPANY MODEL 
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
//create schema
var CompanySchema = new mongoose.Schema({
    name: {type: String, required: true},
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
    _user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    status: {type: String},
    notes: {type: String},
    contact: {
        contact_name: {type: String},
        linkedin: {type: String},
        contact_email: {type: String},
        phone: {type: String},
        notes: {type: String}
    }
}, { timestamp: true } );

//register schema as model
var Company = mongoose.model('Company', CompanySchema);