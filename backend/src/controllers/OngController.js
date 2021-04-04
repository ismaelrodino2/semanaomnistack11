const crypto = require('crypto'); //gera texto aleatório 
const connection = require('../database/connection');//importar connection com banco
module.exports = {
    async index (request, response) { //index nome p método q faz listagem de todos dados de uma tabela
        const ongs = await connection('ongs').select('*');//quero selecionar tds cmapos de tds registros da tabela ongs
        return response.json(ongs);//retorna array
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body; //dentro de cada variável tenho cada dado gaurdado que inseri no insomnia

        const id = crypto.randomBytes(4).toString('HEX');//gera 4 bytes de caracteres aleatórios q converta para string hexadecimal
    
        await connection('ongs').insert({//aguarda código terminar pra continuar await
            id, 
            name,
            email,
            whatsapp,
            city,
            uf,
        }) //inserir dados na tabela ongs
    
        return response.json({ id }); 
    }
};
//compactei o código em um arquivo, para chamar tudo no routes e ficar mais limpo