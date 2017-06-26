/*
 * COMPANY MODEL 
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
//create schema
var CompanySchema = new mongoose.Schema({
    name: {type: String},
    role: {type: String},
    _contact1: {type: Schema.Types.ObjectId, ref: 'Contact'},
    _contact2: {type: Schema.Types.ObjectId, ref: 'Contact'},
    address: {
        street: {type: String},
        suite: {type: String},
        zip: {type: Number},
        state: {type: String}
    },
    upcoming: [
        {
            followup: {type: String},
            datetime: {type: Date},
            note: {type: String}
        }
    ],
    status: {type: String},
    notes: [{type: String}]
}, {timestamp: true});

//register schema as model
var Company = mongoose.model('Company', CompanySchema);