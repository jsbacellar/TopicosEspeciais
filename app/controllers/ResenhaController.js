const models = require('../../models');

exports.index = (req, res) => {
    models.Resenha.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then((Resenha) => {
        res.status(200).json(Resenha)
    }).catch((err) => {
        res.send(err)
    });
}