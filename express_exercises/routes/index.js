const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    // use the render template instead
    res.render('template', {
        locals: {
            title: 'HELLO WORLD'
        },
        partials: {
            partial: 'partial-index'
        }
    });
    // res
    // .status(200)
    // .send(`<h1>Hello World!</h1>`)
    // .end();
});

module.exports = router;
