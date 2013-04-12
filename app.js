var express = require('express'),
    http    = require('http'),
    fs      = require('fs'),
    path    = require('path');
    
    app = express();
    app.configure(function(){
      app.set("port", process.env.PORT || 3000);
      app.use(express.logger('dev'));
      app.use("/js",express.static(__dirname + '/js'));
      app.use("/lib",express.static(__dirname + '/lib'));
    });

    app.configure("development", function(){
      return app.use(express.errorHandler());
    });

    app.get('/', function(req, res){
      fs.readFile('index.html', 'utf8', function(err, text){
      res.send(text); 
      });
    });
    
    http.createServer(app).listen(app.get("port"), function(){
      return console.log("server listening on port " + app.get("port"));
    })