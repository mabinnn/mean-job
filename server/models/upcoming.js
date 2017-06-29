/*
 * UPCOMING MODEL 
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
//create schema
var UpcomingSchema = new mongoose.Schema({
    _company: {type: Schema.Types.ObjectId, ref: 'Company'},
    followup: {type: String},
    note: {type: String}
}, {timestamps: true});

//register schema as model
var Upcoming = mongoose.model('Upcoming', UpcomingSchema);
