const axios = require('axios');
const Dev = require('../models/Dev');
const ParseStringAsArray = require('../utils/ParseStringAsArray');

module.exports = {

    async index (request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store (request, response) {
        const {git_username, techs, latitude, longitude} = request.body;

        let dev = await Dev.findOne({git_username})

        if (!dev) {
            const gitResponse = await axios
            .get(`https://api.github.com/users/${git_username}`)
        
            const {name = login, avatar_url, bio} = gitResponse.data;
        
            const techsArray = ParseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
            
            dev = await Dev.create({
                name,
                git_username,
                avatar_url,
                techs: techsArray,
                bio,
                location,
            }) 
        }

        return  response.json(dev);
    }
};