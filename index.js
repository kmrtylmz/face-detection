let express = require('express');
let app = express();

app.use(express.static('public'));


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {

    res.sendFile('index.html' ,  { root: __dirname });


});

app.listen('8000');