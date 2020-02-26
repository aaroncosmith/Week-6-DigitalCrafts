const express = require('express');
const app = express();

app.listen(3333, () => {
    console.log("Server running on port 3333, just to let you know ;)")
});

const rootController = require('./routes/index'),
catController = require('./routes/cat'),
dogController = require('./routes/dog'),
personController = require('./routes/person'),
fooController = require('./routes/foo'),
greetController = require('./routes/greet');

app.use('/', rootController);
app.use('/cat', catController);
app.use('/dog', dogController);
app.use('/person', personController);
app.use('/foo', fooController);
app.use('/greet', greetController);




// app.get('/', (request, response) => {
//     const helloWorld = `<h1>Hello, world!</h1>`;
//     response
//         .status(200)
//         .send(helloWorld)
//         .end();
// });

// app.get('/cats', (req, res) => {
//     const meow = `<h1>Meow!<h1>`;
//     res
//         .status(200)
//         .send(meow)
//         .end();
// });

// app.get('/dogs', (req, res) => {
//     const woof = `<h1>Woof!<h1>`
//     res
//         .status(200)
//         .send(woof)
//         .end();
// });

// app.get('/', rootController);
// app.get('/cats', meowController);
// app.get('/dogs', woofController);

// // app.get('/dog', fooController);
// const fooController = (req, res) => {
//     const snippet = `<h1>foo</h1>`;
//     res
//         .status(200)
//         .send(woof)
//         .end();
// };