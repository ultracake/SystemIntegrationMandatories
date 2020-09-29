const express = require('express');
const sqlite3 = require('sqlite3');
var bodyParser = require('body-parser');

var db = new sqlite3.Database('nem_id_database.sqlite');
const app = express();
const port = 8090;

var jsonParser = bodyParser.json();

app.post('/nemid-auth', jsonParser, async (req, res) => {
    console.log(req.body);

    let nemIdCode = req.body.nemIdCode;
    let nemId = req.body.nemId;

    //Generate nemid
    nemIdDigits = nemId.slice(0, 2);
    cprDigits = cpr.slice(-2);

    responseData = { "generatedCode": "" + Math.random(100000, 999999) };

    let query = "SELECT user WHERE NemID = ? AND Password = ?";

    db.run(query, [nemId, nemIdCode], (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            if (rows.length >= 1) {
                return res.status(200).send(responseData);
            } else {
                return res.status(403).send();
            }
        }
    });
});

app.listen(port, () => {
    console.log(`code generator listening at http://localhost:${port}`)
})