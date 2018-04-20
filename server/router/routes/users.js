'use strict';

module.exports = function (app, db) {
    // GET all users
    console.log('in users.js server side');
    app.get('/users', function(req, res) {
        res.send(200, console.log("Within users"));
        
        db.users.findAll()
            .then(usrs => {
                res.send(200, 'a');
            });
    });
    // GET one user by id
    app.get('/users/:id', (req, res) => {
        const id = req.params.id;
        req.
        db.users.findOne({
            where: { ERS_USERS_ID: id }
        }).then(user => {
            res.send(user.json());
        });
    });
}
