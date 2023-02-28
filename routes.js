const routes = require('express').Router();
const MusicController = require('./controller/musicController');

routes.get('/', (req, res)=>{
    res.status(200).json({message: "Tudo certo"})
})
routes.post('/register', MusicController.store);
routes.get('/show', MusicController.show);

module.exports = routes;