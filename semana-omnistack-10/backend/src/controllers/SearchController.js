const dev = require('../models/Dev');
const ParseStringAsArray = require('../utils/ParseStringAsArray')

module.exports = {

    async index(response, request){
        const {latitude, longitude, techs} = request.query;

        const techsArray = ParseStringAsArray(techs);
        console.log(techsArray);
        

        return response.json({ dev: []})
    }
}