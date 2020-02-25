const express = require('express');
const app = express();

app.listen(3333, () => {
    console.log("Server running on port 3333");
});

// remember G(get) P(post) P(put) D(delete) => GPPD
//everything express does will do a request and response
app.get('/', (request, response) => {
    const snippet = `<h1>Bobby quit looking at my damn screen</h1>`;
    response
        .status(200)
        .send(snippet)
        .end();
});

