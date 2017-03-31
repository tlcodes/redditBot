// require Express and create Express app
var express = require('express');
var app = express();
// intialize url and request to use later
var url = require('url');
//var request = require('request');

// require the body parser to parse json data and urls
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set the port to whaever or 9001
app.set('port', (process.env.PORT || 9001));

// for testing purpose on the root of app
app.get('/', function(req, res){
  res.send('Get request works!');
});

app.post('/', function(req, res){
  console.log(req.body.text);
  var data = {
    response_type: "ephemeral",
    text: 'Reddit Bot Response to POST'
  }
  res.send(data.text);
  });

/*
app.post('/post', function(req, res){
  var parsed_url = url.format({
    pathname: 'https://api.genius.com/search',
    query: {
      access_token: process.env.GENIUS_ACCESS,
      q: req.body.text
    }
  });

  request(parsed_url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var data = JSON.parse(body);
      var first_url = data.response.hits[0].result.url;

      var body = {
        response_type: "in_channel",
        text: first_url
      };

      res.send(body);
    }
  });
});*/

// Listen!
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
