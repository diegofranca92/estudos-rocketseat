import express from 'express';
import knex from './db/conexao';

const routes = express.Router();

routes.get('/itens', async (request, response) =>{
    const itens = await knex('item').select('*');

    const itensOrganizados = itens.map( item => {
        return {
            titulo: item.titulo,
            img_url: `http://localhost:3333/uploads/${item.imagem}`,

        }
    });

    return response.json(itensOrganizados);
 });

export default routes;