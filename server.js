var express = require('express');
var path = require('path');
var app = express();

app.get('/*', function (req, res){
   res.sendFile(__dirname + '/nba.html') 
});

app.listen(3000);
console.log('port 3000 live');