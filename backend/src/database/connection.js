const knex = require('knex');
const configuration = require('../../knexfile')//configurações do banco de dados no arquivo knexfile

const connection = knex(configuration.development);

module.exports = connection;//exportar conexão com o banco de dados para connection