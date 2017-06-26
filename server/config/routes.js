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
    
    //users
    app.post('/new_user', (req, res) => {
        users.createUser(req, res);
    });
    app.get('/user/:id', (req, res) => {
        users.findUser(req, res);
    });
    //companies
    app.post('/new_company', (req, res) => {
        companies.createCompany(req, res);
    });
    app.get('/company/:id', (req, res) => {
        companies.findCompany(req, res);
    });
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
        res.sendFile(path.resolve("./public/dist/index.html"));
    });
}