const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const {id} = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if (!ong) {//se  ong n existir
            return response.status(400).json({error: 'No ONG found with this ID'}); //status bad request 400 algo deu errado
        }
        return response.json(ong);
    }
}