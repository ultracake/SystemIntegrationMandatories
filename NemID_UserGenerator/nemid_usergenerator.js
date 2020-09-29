const express = require('express');
var bodyParser = require('body-parser');

const app = express();
const port = 8088;

var jsonParser = bodyParser.json();

app.post('/generate-nemId', jsonParser, async (req, res) => {
    let cpr = req.body.cpr;
    let email = req.body.email;

    //Generate nemid
    randomNum = Math.random() * 10000;
    cprLastFour = cpr.slice(-4);

    responseData = { "nemId": "" + randomNum.toFixed(0) + cprLastFour };

    return res.status(201).send(responseData);
});

app.listen(port, () => {
    console.log(`usergenerator app listening at http://localhost:${port}`)
});