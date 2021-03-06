'use strict';

var connection = require('dbfunct/MySQLconnection');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  res.json([
    {
      name : 'HTML5 Boilerplate',
      info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
      awesomeness: 10
    }, {
      name : 'AngularJS',
      info : 'AngularJS is a toolset for building the framework most suited to your application development.',
      awesomeness: 10
    }, {
      name : 'Karma',
      info : 'Spectacular Test Runner for JavaScript.',
      awesomeness: 10
    }, {
      name : 'Express',
      info : 'Flexible and minimalist web application framework for node.js.',
      awesomeness: 10
    }
  ]);
};


exports.message = function(req, res) {
  res.send('Hello World');
};

//login function
exports.login = function (req,res,callback) {

var user = req.body.nombre;
var pass = req.body.pass;
var json ="";

    //creating connection object
    var sqlconnection = connection.createConnection();
    var query = 'SELECT * FROM usuarios WHERE nombre="'+user+'" AND password="'+pass+'"';

    //sending query through our connection object
    sqlconnection.query(query, function(err, results) {
        if (err)
            return callback(err, "query error");

       if (results.length<=0){

        console.log("login incorrecto"+results);
        res.send('null');

       }else{

        console.log("login correcto del usuario: "+user);
        json = JSON.stringify(results);
        //returning jsonized result
        //res.json(json);
        //returning json object
        res.json(results);

       }

        sqlconnection.end();

    });
};

//register function
exports.register = function (req,res,callback) {

var mail = req.body.mail;
if(verificaMail(mail)){
  console.log("existe");
  res.send("email existe - no registrar")

}else{
  console.log("no existe");
  res.send ("email no existe registrar")

}
/*
var user = req.body.nombre;
var pass = req.body.pass;
var json ="";

    //creating connection object
    var sqlconnection = connection.createConnection();
    var query = 'SELECT * FROM usuarios WHERE nombre="'+user+'" AND password="'+pass+'"';

    //sending query through our connection object
    sqlconnection.query(query, function(err, results) {
        if (err)
            return callback(err, "query error");

       if (results.length<=0){

        console.log("login incorrecto"+results);
        res.send('null');

       }else{

        console.log("login correcto del usuario: "+user);
        json = JSON.stringify(results);
        //returning jsonized result
        //res.json(json);
        //returning json object
        res.json(results);

       }

        sqlconnection.end();

    });*/
};

var verificaMail = function (mail) {

    //creating connection object
    var sqlconnection = connection.createConnection();
    var query = 'SELECT * FROM usuarios WHERE email="'+mail+'';

    //sending query through our connection object
    sqlconnection.query(query, function(err, results) {
        if (err)
            return callback(err, "query error");

       if (results.length<=0){

        return false;
        //res.send('null');

       }else{

        return true;

       }

        sqlconnection.end();

    });
};


