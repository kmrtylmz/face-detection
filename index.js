let express = require('express');
let app = express();

app.use(express.static('public'));


app.get('/', function (req, res) {

    res.sendFile('index.html' ,  { root: __dirname });


});

app.listen('8000');