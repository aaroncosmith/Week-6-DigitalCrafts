const express = require('express'),
    es6Renderer = require('express-es6-template-engine'),
    app = express();

app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html')

app.listen(3333, () => {
    console.log("server running on port 3333, just to let you know ;)")
});

const rootController = require('./routes/index'),
page2Controller = require('./routes/page2'),
page3Controller = require('./routes/page3');

app.use('/', rootController);
// app.use('/page2', page2Controller);
// app.use('/page3', page3Controller);
