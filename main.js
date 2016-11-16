var express = require('express');
var app = express();

app.get( '/', function(req, res)
    {
        res.send('Hello World!');
    });

app.listen(2071, function()
    {
        console.log('Server On!');
    });
