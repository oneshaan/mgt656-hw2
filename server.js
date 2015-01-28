var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});

app.get('/happy-swan', function(request, response){
    response.send('happy-swan');
});

app.listen(process.env.PORT || 4000);