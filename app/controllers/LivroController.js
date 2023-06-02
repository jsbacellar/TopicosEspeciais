const models = require('../../models');

exports.index = (req, res) => {
    models.Livro.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then((Livro) => {
        res.status(200).json(Livro)
    }).catch((err) => {
        res.send(err)
    });
}