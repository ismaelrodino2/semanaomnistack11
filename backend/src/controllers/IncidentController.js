const connection = require('../database/connection');
module.exports = {
    async index(request, response){
        const {page = 1} = request.query; //vou buscar dentro do query o parâmetro page = 1

        const [count] = await connection('incidents').count();//contar os incidentes e como isso retorna array, pra pegar apenas a primeira posição faz [count] -> retorna um número só ou = count[0]

        const incidents = await connection('incidents')//esquema de paginação
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')//apenas dados onde o id = ao id da ong
            .limit(5) //limitar para retornar 5 registros
            .offset((page-1)*5) //pular de 5 em 5 registros
            .select([ //manter id de cada caso
                'incidents.*', 
                'ongs.name', 
                'ongs.email', 
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);

        response.header('X-Total-Count', count['count(*)'])//passar o total de páginas no cabeçalho com o count criado acima

        return response.json(incidents);
    },


    async create(request, response){//cadastro de incidentes
        const {title, description, value} = request.body;//em casos de login dentro do sistema vem através do cabeçalho da requisição(request.headers)->autenticação, localização(idioma)... e não do corpo 
        const ong_id = request.headers.authorization;//acessar o id da nossa ong com o nome authorization dado no insomnia
        const [id] = await connection('incidents').insert({//a primeira chave do id vai ser armazenada nessa variável id
            title,
            description,
            value,
            ong_id,
        });//vou inserir na tabela incidents o dado com title, description... todas essas colunas
        return response.json({ id });
    },

    async delete(request, response){
        const {id} = request.params; //pegar id de dentro do request.params
        const ong_id = request.headers.authorization;//pegar id da ong logada
        const incident = await connection('incidents')
            .where('id', id)//o id = o outro criado
            .select('ong_id')
            .first();

        if (incident.ong_id !== ong_id){//verificar se o incidente vc quer deletar realmente foi criado pela ong q quer deletar ele, se n preciso vetar
            return response.status(401).json({error: "Operation not permited."}); //qnd o usuário n tem autorização 401
        } 
        await connection('incidents').where('id', id).delete();
        return response.status(204).send();//deu sucesso mas sem conteudo 204
    }
};