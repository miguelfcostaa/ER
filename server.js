
const http = require('http');
const express = require('express');
const session = require("express-session");



const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;


server.listen(port, () => {
    console.log(`Application is running at: http://localhost:${port}`);
    console.log('Connected!');
})

app.use(express.static(__dirname + '/public'));


app.get('/', (req,res)=> {
    res.sendFile(__dirname + "/html/main.html");
});

app.get('/ecraPrincipal', (req,res)=> {
    res.sendFile(__dirname + "/html/ecraPrincipal.html");
});

app.get('/ecraVolante', (req,res)=> {
    res.sendFile(__dirname + "/html/ecraVolante.html");
});


app.use((req,res) => {
    res.status(404).render('404');
});



