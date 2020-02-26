const express = require('express'),
    router = express.Router();

// add some data
const data = [
    { name:'Jason', zord:'Trex'},
    { name: 'Foo', zord: 'Bar'}
];


router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Foo! Foo! Foo!',
            arrayOfData: data
        },
        partials: {
            partial: 'partial-foo'
        }
    });
    // res
    //     .status(200)
    //     .send(`<h1>FOOOOOOOOOO!</h1>`)
    //     .end();
});

module.exports = router;