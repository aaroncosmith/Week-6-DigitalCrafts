const express = require('express'),
    router = express.Router();

router.get('/:name?', (req, res) => {
    // we can put in logic using the :name? params
    console.log('url parameters are: ', req.params);
    // use this to pass into the send lower
    // const name = req.params.name is the same
    // but you want to do it this way for using multipul
    // for example const { firstname, lastname, age} = req.parmas
    const { name } = req.params;
    res
        .status(200)
        .send(`<h1>Hello ${name}</h1>`)
        .end();
});

module.exports = router;