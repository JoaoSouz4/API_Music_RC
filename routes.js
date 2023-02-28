const routes = require('express').Router();
const MusicController = require('./controller/musicController');

routes.post('/register', MusicController.store);
routes.get('/show', MusicController.show);

module.exports = routes;