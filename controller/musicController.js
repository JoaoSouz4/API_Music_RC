const music = require('../models/musicModel');
const musicModel = require('../models/musicModel');

class MusicController {
    async store(req, res){
        const createMusic = await musicModel.create(req.body);
        res.status(200).json({createMusic});
    }

    async show(req, res){
        const dataMusic = await musicModel.find({});
        res.status(200).json({dataMusic});
    }
}

module.exports = new MusicController();