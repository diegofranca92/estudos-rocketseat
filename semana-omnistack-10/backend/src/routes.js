const {Router} = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();

routes.post('/devs', async (request, response) =>{
    const {git_username, techs} = request.body;
    const gitResponse = await axios
    .get(`https://api.github.com/users/${git_username}`)

    const {name = login, avatar_url, bio} = gitResponse.data;

    const techsArray = techs.split(',').map(tech => tech.trim())
    
    const dev = await Dev.create({
        name,
        git_username,
        avatar_url,
        techs: techsArray,
        bio,
    })
    
    return  response.json(dev);
});

module.exports = routes;