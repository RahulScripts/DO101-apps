const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

    response = 'version 2 and 3 now available on /new! and 3' + '\n';

    //send the response to the client
    res.send(response);

});

app.get('/new', function (req, res) {
    response = 'This is version 2! Welcome'+'\n';
    res.send(response);
});

app.get('/3', function (req, res) {
  response = 'This is version 3! Welcome'+'\n';
  res.send(response);
});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
