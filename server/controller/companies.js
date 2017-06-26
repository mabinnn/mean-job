/*
 * COMPANY MODEL 
 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//create schema
var CompanySchema = new mongoose.Schema({
    name: {type: String},
    role: {type: String},
    _contacts: [{type: Schema.Types.ObjectId, ref: 'Contact'}],
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
    notes: [{type: String}]
}, {timestamp: true});

//register schema as model
var Company = mongoose.model('Company', CompanySchema);