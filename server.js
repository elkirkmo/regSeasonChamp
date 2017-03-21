var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function (req, res){
   res.sendFile(__dirname + '/nba.html') 
});

app.use('/scripts',express.static('js'))
app.use('/styles',express.static('styles'))
app.use('/bower_components',express.static('bower_components'))

app.listen(port);
console.log('port 3000 live');