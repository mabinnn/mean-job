/*
 * VARIABLES
 */
var users = require('../controller/users.js'),
    companies = require('../controller/companies.js'),
    contacts = require('../controller/contacts.js'),
    path = require('path');

/*
 * ROUTES
 */
module.exports = function(app){
    
    // app.post('/newitem', (req, res) => {
    //     items.createItem(req, res);
    // });
    // app.get('/items', (req, res) => {
    //     items.index(req, res);
    // });
    // app.post('/delete/item', (req, res) => {
    //     console.log('reached routes.js/app.delete()');
    //     items.deleteItem(req, res);
    // })
    app.all("*", (req,res) => {
        res.sendfile(path.resolve("./public/dist/index.html"));
    });
}