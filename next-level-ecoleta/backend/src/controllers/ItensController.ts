import { Request, Response } from 'express';
import knex from '../db/conexao';

class ItensController {
    async listarItens(request: Request, response: Response) {
        const itens = await knex('item').select('*');
    
        const itensOrganizados = itens.map( item => {
            return {
                id: item.id,
                titulo: item.titulo,
                img_url: `http://localhost:3333/uploads/${item.imagem}`,
    
            }
        });
    
        return response.json(itensOrganizados);
     }
}

export default ItensController;