/*
 * VARIABLES
 */
var users = require('../controller/users.js'),
    companies = require('../controller/companies.js'),
    upcomings = require('../controller/upcomings.js'),
    path = require('path');

/*
 * ROUTES
 */
module.exports = function(app){
    
    //USERS:
    app.post('/new_user', (req, res) => {
        users.createUser(req, res);
    });
    /*find user by email*/
    app.post('/user', (req, res) => {
        users.findUser(req, res);
    });

    //COMPANIES
    app.post('/new_company', (req, res) => {
        companies.createCompany(req, res);
    });
    app.post('/companies', (req, res) => {
        companies.findCompanies(req, res);
    });
    /*company id in url*/
    app.get('/company/:id', (req, res) => {
        companies.findCompany(req, res);
    });
    /* - company id in url
       - new company note passed in req */
    app.post('/new_note/:id', (req, res) => {
        companies.addNote(req, res);
    });
    // /* - company id in url
    //    - contact note passed in req*/
    // app.post('/new_contact_note/:id', (req, res) => {
    //     companies.editContactNote(req, res);
    // });
    /* company id in url*/
    app.get('/delete_company/:id', (req, res) => {
        companies.deleteCompany(req, res);
    });

    //UPCOMINGS
    /* upcoming details (&company id) in req */
    app.post('/new_upcoming/', (req, res) => {
        upcomings.createUpcoming(req, res);
    });
    /* upcoming id in url */
    app.get('/delete_upcoming/:id', (req, res) => {
        upcomings.deleteUpcoming(req, res);
    });
    /* upcoming id in url, upcoming update in req */
    app.post('/edit_upcoming/:id', (req, res) => {
        upcomings.editUpcoming(req, res);
    });

    /*CATCH ALL ROUTE*/
    app.all("*", (req,res) => {
        res.sendFile(path.resolve("./public/dist/index.html"));
    });
}