/*
 * USER MODEL 
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
//create schema
var UserSchema = new mongoose.Schema({
    first_name: {type: String},
    last_name: {type: String},
    email: {type: String},
    password: {type: String},
    _companies: [{type: Schema.Types.ObjectId, ref: 'Company'}]
}, {timestamp: true});

//register schema as model
var User = mongoose.model('User', UserSchema);