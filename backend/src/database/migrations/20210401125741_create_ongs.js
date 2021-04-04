
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table){//nossa tabela
    table.string('id').primary();//nossa ong terá um id
    table.string('name').notNullable();//n pode ser vazio 
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();//tamanho 2 caracteres
  });
};

exports.down = function(knex) {//se der algum problema
  return knex.schema.dropTable('ongs');
};
