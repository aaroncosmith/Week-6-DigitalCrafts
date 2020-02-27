// get our db options from conn.js file
const db = require('./conn');

// make our class to put data into
class ExecutiveList {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
// select all from the table in our database
    static async getAll(){
        // put into a try to test for errors
        try {
            // only returns a promise
            // db.any(`SELECT * FROM ceos;`);
            // thanks to variable and await not a promise anymore
            const response = await db.any(`SELECT * FROM ceos;`);
            // not a fetch method thanks to pg-promise
            return response;
        } catch (error) {
            console.error('ERROR:', error);
            return error;
        }
    }
    // add arguement dynamicly
    static async getById(id) {
        try {
            const response = await db.any(`SELECT * FROM ceos WHERE id = ${id}`);
            return response;
        } catch(e) {
            console.error('ERROR:', error);
            return error;
        }
    }
};

// export your module
module.exports = ExecutiveList;