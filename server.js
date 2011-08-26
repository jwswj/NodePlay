// Import express, made available via NPM.
var express = require('express');
var app = express.createServer();
 
var PORT = 3000;
 
// Set the default view engine to EJS.
app.set('view engine', 'ejs');
 
// Configure the app.
app.configure(function() {
    //app.use(express.methodOverride());
    //app.use(express.bodyDecoder());
    //app.use(app.router);
    //app.use(express.staticProvider(__dirname + '/public'));
});
 
// Development.
app.configure('dev', function() {
    app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});
 
// Production.
app.configure('prod', function() {
    app.use(express.errorHandler());
});

// Route :: /
app.get('/', function(req, res) {
    res.render('pages/home', {
        locals: {
            title: 'Welcome'
        }
    });
});

// Route :: /pages/hello-world
app.get('/pages/hello-world', function(req, res) {
    res.render('pages/hello-world', {
        locals: {
            title: 'Hello World'
        }
    });
});
 
app.listen(PORT);
console.log('Node.js web server listening on port: ' + PORT);