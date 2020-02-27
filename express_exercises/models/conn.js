// pass this database info to put into pg-promise
// don't share these four lines on your own stuff
// or push to github, we will secure later

const host = 'rajje.db.elephantsql.com',
    database = 'ohhdjrvp',
    user = 'ohhdjrvp',
    password = 'H5qkuqkn0ACVHaiGZyunDrs6jdSfbr4M';

// get the options called from above
const options = {
    host: host,
    database: database,
    user: user,
    password: password
};

// pull in pg-promise      call a function for some debuging as well
const pgp = require('pg-promise')({
    query: function(e) {
        console.log('QUERY:', e.query);
    }
});

// get into the DB - if you call the DB object, you can use all the pgp 
// options through that variable
const db = pgp(options);

module.exports = db;