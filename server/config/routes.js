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
    /*user id in url*/
    app.get('/user/:id', (req, res) => {
        users.findUser(req, res);
    });

    //COMPANIES
    app.post('/new_company', (req, res) => {
        companies.createCompany(req, res);
    });
    app.get('/companies', (req, res) => {
        companies.findCompanies(req, res);
    });
    /*company id in url*/
    app.get('/company/:id', (req, res) => {
        companies.findCompany(req, res);
    });
    /* - company id in url
       - company note passed in req */
    app.post('/new_note/:id', (req, res) => {
        companies.addNote(req, res);
    });
    /* - company id in url
       - contact note passed in req*/
    app.post('/new_contact_note/:id', (req, res) => {
        companies.addContactNote(req, res);
    });
    /* - company id in url
       - user email passed in req*/
    app.post('/delete_company/:id', (req, res) => {
        companies.deleteCompany(req, res);
    });

    //UPCOMINGS
    /* - company id in url
       - upcoming details in req */
    app.post('/new_upcoming/:id', (req, res) => {
        upcomings.createUpcoming(req, res);
    });
    /* - upcoming id in url
       - company id in req details */
    app.post('/delete_upcoming/:id', (req, res) => {
        upcomings.deleteUpcoming(req, res);
    });
    /* - upcoming id in url 
       - company id in req */
    app.post('/edit_upcoming/:id', (req, res) => {
        upcomings.editUpcoming(req, res);
    });

    /*CATCH ALL ROUTE*/
    app.all("*", (req,res) => {
        res.sendFile(path.resolve("./public/dist/index.html"));
    });
}