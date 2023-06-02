const models = require('../../models');

exports.index = (req, res) => {
    models.Autor.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then((Autor) => {
        res.status(200).json(Autor)
    }).catch((err) => {
        res.send(err)
    });
}