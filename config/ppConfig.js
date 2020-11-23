const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models')

// passport "serialize" your info and  make it easier to log in
passport.serializeUser((user, cb) => {
cb(null, user.id)
});

//passport "deserialize" is going ot take the id and look it up in the database
passport.deserializeUser((id, cb) => {
    db.user.findByPk(id)
    .then(user => {
        if (user) {
            cb(null, user);
        }
    })
    .catch(err => {
        console.log(err)
    })
})