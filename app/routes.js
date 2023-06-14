const express = require('express');
const router = express.Router();

//controllers

const LivroController = require('./controllers/LivroController');

const AutorController = require('./controllers/AutorController');

const UsuarioController = require('./controllers/UsuarioController');
/*#############################################################

                    ROUTERS ADMIN

###############################################################*/


router.get('/api/livro', LivroController.index);

router.get('/api/autor', AutorController.index);

router.get('/api/usuario', UsuarioController.index);



module.exports = router;

