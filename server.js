'use strict';

// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./server/config/db.js');
const http = require('http');
const path = require('path');
const morgan = require('morgan');
const env = require('./server/config/env');
const router = require('./server/router/index');
const jwt = require('jsonwebtoken');

// Start express
const app = express();
const PORT = env.PORT;

app.set('bigSecret', env.secret);

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// log to the console using morgan
app.use(morgan('dev'));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Create routes
// Returns all users
app.get('/users', function(req,res) {
    db.users.findAll()
        .then(usrs => {
            res.json(usrs);
        });
});
// Returns user with matching id
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    db.users.findOne({
        where: { ERS_USERS_ID: id }
    }).then(user => {
        res.json(user);
    });
});
// Returns all forms with matching user id
app.get('/forms/:id', (req, res) => {
    const id = req.params.id;
    db.reimbForms.findAll({
        where: {REIMB_AUTHOR: id}
    }).then(forms => {
        res.json(forms);
    });
});
// Return all forms
app.get('/forms', (req, res) => {
    db.reimbForms.findAll()
        .then(forms => {
            res.json(forms);
        });
});
// Approve form
app.get('/forms/approve/:id', (req, res) => {
    const id = req.params.id;
    db.reimbForms.findOne({ where: {REIMB_ID: id} })
        .then(form => {
            if(form) {
                form.updateAttributes({
                    REIMB_STATUS_ID: 2
                }).then(() => {
                    res.status(201).send()
                });
            };
        });
});
// Deny form
app.get('/forms/deny/:id', (req, res) => {
    const id = req.params.id;
    db.reimbForms.findOne({ where: {REIMB_ID: id} })
        .then(form => {
            if(form) {
                form.updateAttributes({
                    REIMB_STATUS_ID: 3
                }).then(() => {
                    res.status(201).send()
                });
            };
        });
});

// Puts new form in database
app.post('/forms/new', (req, res) => {
    const auth = req.body.author;
    const amnt = req.body.amount;
    const desc = req.body.description;
    const type = req.body.type;
    console.log(auth);
    console.log(amnt);
    console.log(desc);
    console.log(type);
    db.reimbForms.create({
        REIMB_AMOUNT: amnt,
        REIMB_DESCRIPTION: desc,
        REIMB_AUTHOR: auth,
        REIMB_TYPE_ID: type
    }).then(result => {
        res.status(201).json({result});
    });

});

app.post('/authenticate', (req, res) => {
        const username = req.body.un;
        const password = req.body.pw;
        db.users.findOne({
            where: {ERS_USERNAME: username}
        }).then(user => {
            if(user && user.get({plain: true}).ERS_PASSWORD == password){
                console.log(user.get({plain: true}));
                if(user.get({plain: true}).USER_ROLE_ID == 1) {
                    res.status(222).json(user);
                } else {
                    res.status(200).json(user);
                }
            } else {
                res.status(401).json(user);
            }
        });
});

// Set our api routes
//app.use('/', router);
// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
// Create HTTP server.
const server = http.createServer(app);
// Listen on provided port, on all network interfaces.
server.listen(PORT, () => console.log(`API running on localhost:${PORT}`));
