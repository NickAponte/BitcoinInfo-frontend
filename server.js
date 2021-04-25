// // server.js
// const path = require('path')
// const express = require('express');
// const app = express();
// // Run the app by serving the static files
// // in the dist directory
// app.use(express.static(__dirname + '/dist'));
// // Start the app by listening on the default
// // Heroku port
// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname + '/dist/index.html'));
//   });
// app.listen(process.env.PORT || 8080);

//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/BitcoinInfo-frontend'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/BitcoinInfo-frontend/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);