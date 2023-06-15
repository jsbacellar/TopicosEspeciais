const models = require('../../models');

exports.index = (req, res) => {
    models.Editora.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then((Editora) => {
        res.status(200).json(Editora)
    }).catch((err) => {
        res.send(err)
    });
}