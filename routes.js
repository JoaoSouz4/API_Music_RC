const routes = require('express').Router();
const MusicController = require('./controller/musicController');

routes.post('/register', MusicController.store);
routes.get('/', (req, res) => {
    res.send("oi")
})

module.exports = routes;