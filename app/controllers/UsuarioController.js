const models = require('../../models');

exports.index = (req, res) => {
    models.Usuario.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then((Usuario) => {
        res.status(200).json(Usuario)
    }).catch((err) => {
        res.send(err)
    });
}