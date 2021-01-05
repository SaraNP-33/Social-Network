var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

require("dotenv").config();

app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
// For passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions