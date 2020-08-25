import express, { request, response } from 'express';
import PontosController from './controllers/PontosController';
import ItensController from './controllers/ItensController';

const pontosController = new PontosController();
const itensController = new ItensController();

const routes = express.Router();

routes.get('/itens', itensController.listarItens);

 routes.post('/ponto', pontosController.criarItem);
 routes.get('/ponto/:id', pontosController.exibirItem);

export default routes;