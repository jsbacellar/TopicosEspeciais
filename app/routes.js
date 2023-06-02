const express = require('express');
const router = express.Router();

//controllers

const LivroController = require('./controllers/LivroController');

const AutorController = require('./controllers/AutorController');
/*#############################################################

                    ROUTERS ADMIN

###############################################################*/


router.get('/api/livro', LivroController.index);

router.get('/api/autor', AutorController.index);



module.exports = router;

