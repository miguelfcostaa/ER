const express = require('express');
const session = require("express-session");

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.use((req,res) => {
    res.status(404).render('404');
});



