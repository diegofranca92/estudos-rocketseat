const express = require('express');
const moongose = require('mongoose');
const routes = require('./routes');

const app = express();

moongose.connect('mongodb+srv://diego:admin@cluster0-b1hoy.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json());
app.use(routes);

app.listen(3333);