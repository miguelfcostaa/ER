const http = require('http');
const express = require('express');
const session = require("express-session");
const bodyParser = require('body-parser');
const routes = require('./routes/routes')
const cookieParser = require('cookie-parser');
const morgan = require ('morgan');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;


server.listen(port, () => {
    console.log(`Application is running at: http://localhost:${port}`);
    console.log('Connected!');
})

app.use(express.static(__dirname + '/public'));
var urlencodedParser = bodyParser.urlencoded({extended:false});
app.use(urlencodedParser);
app.use(express.json());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());


app.set('view engine' , 'ejs');

app.get('/', (req,res)=> {
    res.render('main');
});

app.use(routes);

app.use((req,res) => {
    res.status(404).render('404');
});



