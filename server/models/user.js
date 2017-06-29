/*
 * USER MODEL 
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
//var EMAIL_REGEX = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
//create schema
var UserSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true
        // validate: function (v) {
        //     isAsync: true;
        //     validator: function(v, cb){
        //         setTimeout(function(){
        //             var msg = v+' is not a valid email';
        //             cb(EMAIL_REGEX.text(v), msg);
        //         }, 5);
        //     },
        //     message: 'Email invalid';
        // },
        // required: [true, 'Email required']
    },
    password: {type: String, required: true},
    _companies: [{type: Schema.Types.ObjectId, ref: 'Company'}]
}, {timestamps: true});

//register schema as model
var User = mongoose.model('User', UserSchema);