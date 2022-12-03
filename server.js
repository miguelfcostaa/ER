const express = require('express');
const session = require("express-session");

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

server.listen(port, () => {
    console.log(`Application is running at: http://localhost:${port}`);
    console.log('Connected!');
})


app.get('/', (res,req)=> {
    res.sendFile(__dirname + "/html/login.html");
});


app.use((req,res) => {
    res.status(404).render('404');
});



