const connection = require('../database/connection');

module.exports = {

    async index(request, response) {

        const ong_id = request.headers.authorization;

        console.log(ong_id);
        
        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

        if (incidents === undefined) {
            return response.status(401).json({ error: 'Operation not permited.' });
        }

        return response.json(incidents);
    }

};