const express = require('express');
var bodyParser = require('body-parser');

const app = express();
const port = 8089;

var jsonParser = bodyParser.json();

app.post('/generate-password-nemID', jsonParser, async (req, res) => {
    console.log(req.body);

    let nemId = req.body.nemId;
    let cpr = req.body.cpr;

    //Generate nemid
    nemIdDigits = nemId.slice(0, 2);
    cprDigits = cpr.slice(-2);

    responseData = { "nemIdPassword": "" + nemIdDigits + cprDigits };

    return res.status(200).send(responseData);
});

app.listen(port, () => {
    console.log(`password generator listening at http://localhost:${port}`)
});