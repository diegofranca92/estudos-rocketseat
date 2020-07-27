import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('ponto_itens', table => {
       table.increments('id').primary();
       table.integer('ponto_id')
        .notNullable()
        .references('id') // chave estrangeira
        .inTable('ponto'); 
       table.integer('item_id')
        .notNullable()
        .references('id') // chave estrangeira
        .inTable('item'); 
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('ponto_itens');
}