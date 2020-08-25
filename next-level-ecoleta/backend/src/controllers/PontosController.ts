import { Request, Response } from 'express';
import knex from '../db/conexao';

class PontosController {

    async exibirItem(request: Request, response: Response){
        const { id } = request.params;

        let ponto = await knex('ponto').where('id', id).first();

        if (!ponto) {
            return response.status(400).json({messagem: 'Ponto não Encontrado'});
        }

        const itens = await knex('item')
            .join('ponto_itens', 'item.id', '=', 'ponto_itens.item.id')
            .where('ponto_itens.ponto.id', id)
            .select('item.titulo');

            return response.json({ponto, itens});
    }

    async criarItem(request: Request, response: Response) {

        const {
            nome,
            email,
            whatsapp,
            cidade,
            uf,
            latitude,
            longitude,
            itens
        } = request.body;
    
    
        const trx = await knex.transaction();

        let ponto = {
            imagem: 'imagem-fake',
            nome,
            email,
            whatsapp,
            cidade,
            uf,
            latitude,
            longitude
        }
    
        const insereIds = await trx('ponto').insert(ponto);

        const ponto_id = insereIds[0]

        const pontoItens = itens.map((item_id: number) => {
            return{
                ponto_id,
                item_id
            }
        });

        await trx('ponto_itens').insert(pontoItens)
        
        return response.json({
            id: ponto_id,
            ...ponto
        });

    }
} 

export default PontosController;
