const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res
    .status(200)
    .send(`<h1>Hello World!</h1>`)
    .end();
});

module.exports = router;

// const rootController = (req, res) => {
//     const snippet = `<h1>Hello World</h1>`;
//     res
//         .status(200)
//         .send(snippet)
//         .end();
// }