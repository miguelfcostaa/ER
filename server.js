const mongoose = require('mongoose');
const http = require('http');
const express = require('express');
const session = require("express-session");
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

const sessionMiddleware = session({ secret: "changeit", resave: false, saveUninitialized: false });

app.use(sessionMiddleware);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(passport.initialize());
app.use(passport.session());


server.listen(port, () => {
    console.log(`Application is running at: http://localhost:${port}`);
    console.log('Connected!');
})

app.use(express.static(__dirname + '/public'));

app.use(function (req, res, next) {
    res.locals.user = req.user;
    next();
});

app.get('/', (req,res)=> {
    res.sendFile(__dirname + "/html/login.html");
});


app.use((req,res) => {
    res.status(404).render('404');
});



