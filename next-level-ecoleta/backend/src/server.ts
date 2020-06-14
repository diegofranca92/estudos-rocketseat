import express from 'express';

const app = express();

app.get('/users', (request, response) =>{
    console.log('Listagem de Usuários');
    
    response.json([
        "1",
        "2",
        "3",
        "4"
    ]);
});

app.listen(3333);