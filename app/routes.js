const express = require('express');
const router = express.Router();

//controllers

const LivroController = require('./controllers/LivroController');

const AutorController = require('./controllers/AutorController');

const UsuarioController = require('./controllers/UsuarioController');

const EditoraController = require('./controllers/EditoraController');

const EmprestimoController = require('./controllers/EmprestimoController');

const ResenhaController = require('./controllers/ResenhaController');
/*#############################################################

                    ROUTERS ADMIN

###############################################################*/


router.get('/api/livro', LivroController.index);

router.get('/api/autor', AutorController.index);

router.get('/api/usuario', UsuarioController.index);

router.get('/api/editora', EditoraController.index);

router.get('/api/emprestimo', EmprestimoController.index);

router.get('/api/resenha', ResenhaController.index);



module.exports = router;

