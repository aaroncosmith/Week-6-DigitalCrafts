const express = require('express'),
    router = express.Router();

router.get('/:name?', (req, res) => {
    // we can put in logic using the :name? params
    console.log('url parameters are: ', req.params);
    // use this to pass into the send lower
    // const name = req.params.name is the same
    // but you want to do it this way for using multipul
    // for example const { firstname, lastname, age} = req.parmas

    // let snippet = `<h1>Hello World!</h1>`;
    // if (!!req.params.firstname) {
    //     snippet = `<h1>Hello ${req.params.firstname} ${req.params.lastname}</h1>`
    // };


    const { name } = req.params;
    res
        .status(200)
        // in example above use
        // .send(snippet)
        // because you create variable
        .send(`<h1>Hello ${name}</h1>`)
        .end();
});

module.exports = router;