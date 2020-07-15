const express = require('express');
const bodyParser = require('body-parser');

const expressApp = express();
expressApp.use(bodyParser.json());
expressApp.use(express.static('./static'));

// listen
const port = process.env.PORT || 80;
expressApp.listen(port, function () {
  console.log('listening on port ' + port);
});
