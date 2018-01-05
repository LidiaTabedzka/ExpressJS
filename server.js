var express = require('express');
var app = express();

function auth (req, res, next){
    console.log('autoryzacja użytkownika'); 
    next();
}

function permission (req, res, next){
    console.log('sprawdzanie uprawnień');
    next();
}

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.get('/store', auth, permission, function (req, res) {
        res.send('To jest sklep');
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});