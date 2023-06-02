const bodyParser = require('body-parser');
const env = require('dotenv').config();
const models = require('./models');
// Routers
const router = require('./app/routes');
const express = require('express');
let ejs = require('ejs');
const app = express();

app.use(function (req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// set the view engine to ejs
app.set('view engine', 'ejs');


// BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

//app.use(express.json()); //esta linha ativa o body-parser.
//app.use(require('./server/index'));
//module.exports = app;

// Sync Database
models.sequelize
    .sync()
    .then(function () {
        console.log('Banco de dados Conectado');

        app.listen(process.env.PORT, function (err) {
            if (!err) console.log('Listening on ' + process.env.PORT);
            else console.log(err);
        });
    })
    .catch(function (err) {
        console.log(err, 'Erro de sincronização com Banco de Dados. Please try again!');
    });