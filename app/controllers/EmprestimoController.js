const models = require('../../models');

exports.index = (req, res) => {
    models.Emprestimo.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then((Emprestimo) => {
        res.status(200).json(Emprestimo)
    }).catch((err) => {
        res.send(err)
    });
}