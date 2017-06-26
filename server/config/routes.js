/*
 * VARIABLES
 */
var users = require('../controller/users.js'),
    companies = require('../controller/companies.js'),
    path = require('path');

/*
 * ROUTES
 */
module.exports = function(app){
    
    //USERS:
    app.post('/new_user', (req, res) => {
        users.createUser(req, res);
    });
    app.get('/user/:id', (req, res) => {/*user id in url*/
        users.findUser(req, res);
    });
    //COMPANIES
    app.post('/new_company', (req, res) => {
        companies.createCompany(req, res);
    });
    app.get('/company/:id', (req, res) => {/*company id in url*/
        companies.findCompany(req, res);
    });
    app.post('/new_note/:id', (req, res) => {/*company id in url*/
        companies.addNote(req, res);
    });
    /* - company id in url
       - user email passed in req*/
    app.post('/delete_company/:id', (req, res) => {
        companies.deleteCompany(req, res);
    });
    app.all("*", (req,res) => {
        res.sendFile(path.resolve("./public/dist/index.html"));
    });
}