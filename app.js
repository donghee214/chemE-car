/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

var bodyParser = require('body-parser')
    // create application/json parser
var jsonParser = bodyParser.json()
    // create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
    // print a message when the server starts listening
    console.log("server starting on " + appEnv.url);
});
/**
 * Module dependencies.
 */


// var http = require('http');

// // var router = express.Router();
// var SendGrid = require('sendgrid-nodejs').SendGrid;
// var sendgrid = new SendGrid('donghee214', '214hotmail');

// /* GET home page. */
// app.post('/api/send', urlencodedParser, function(req, res, next) {
//     // console.log(req.body);
//     sendgrid.send({
//         to: 'donghee214@gmail.com',
//         from: req.body.email,
//         subject: req.body.name,
//         text: req.body.message
//     }, function(err, json) {
//         if (err) {
//             return res.send(err);
//         } else
//             res.send('WAHOOO');
//     });
// });