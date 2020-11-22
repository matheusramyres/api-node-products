const express = require('express');
const monoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//Inicindo o app
const app = express();
app.use(express.json());
app.use(cors());//Disponibilizar acesso da API publicamente


//inciando o DB
monoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser:true});

requireDir('./src/model');

app.use('/api', require('./src/routes'));

app.listen(3333);