const contatosController = require('../controllers/ContatosController');

const routeContato = function(router) {
    router
        .get('/', contatosController.getContatos)
        .get('/:id', contatosController.getContatos)
        .post('/', contatosController.saveContato)
        .put('/:id', contatosController.updateContato)
        .delete('/:id', contatosController.deleteContato);

    return router;
}

module.exports = routeContato;