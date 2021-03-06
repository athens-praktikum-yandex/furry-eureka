const fs = require('fs');
const https = require('https');

const { app } = require('./dist/server.js');

const port = process.env.PORT || 7999;
const privateKey = fs.readFileSync('./ssl/server.key');
const certificate = fs.readFileSync('./ssl/server.crt');

const options = {
  key: privateKey,
  cert: certificate,
};

https.createServer(options, app).listen(port, () => {
  console.log("Express server listening on port " + port);
});