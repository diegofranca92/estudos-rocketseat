const express = require('express');
const moongose = require('mongoose');

const app = express();

moongose.connect('mongodb+srv://diego:admin@cluster0-b1hoy.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json());

app.post('/users', (request, response) =>{
    console.log(request.body)
    return  response.json({
        message:'Iai Pi'
     });
});

app.listen(3333);