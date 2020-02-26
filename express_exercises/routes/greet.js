const express = require('express'),
    router = express.Router();

router.get('/:name?/:year?', (req, res) => {
    console.log('url parameters are: ', req.params);
    let snippet = `<h1>Hello Person!</h1><h2>I wonder when you were born</h2>`;
    const { name, year } = req.params;

    if (!!req.params.name) {
        snippet = `<h1>Hello, ${name}!</h1><h2>You were born in ${year}.</h2>`;
    }

    res
        .status(200)
        .send(snippet)
        .end();
});

module.exports = router;