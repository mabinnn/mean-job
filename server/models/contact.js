/*
 * CONTACT MODEL 
 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
//create schema
var ContactSchema = new mongoose.Schema({
    name: {type: String},
    linkedin: {type: String},
    _company: {type: Schema.Types.ObjectId, ref: 'Company'}
    email: {type: String},
    phone: {type: String}
    note: [{ypte: String}]
}, {timestamp: true});

//register schema as model
var Contact = mongoose.model('Contact', ContactSchema);