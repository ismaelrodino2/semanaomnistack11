
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table){//nossa tabela
        table.increments();//cria uma chave, para cada incidente q cria vai 1 2 3 automático id dos incidents
        table.string('title').notNullable();//n pode ser vazio 
        table.string('description').notNullable();
        table.decimal('value').notNullable();//número c casas decimais

        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');//ong_id referencia id na tabela ongs
//chave estrangeira: id preenchido com o id da outra tabela
    });  
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
