const routeContato = function(router) {
    router
        .get(function(req, res){
            console.log(req.params.id);
            res.json('Usuario ' + req.params.id)
        })
        .get('/:id', function(req, res){
            console.log(req.params.id);
            res.json('Usuario localizado ' + req.params.id)
        })
        .post('/', function(req, res){
            res.json('Usuario cadastrado!');
        })
        .put('/:id', function(req, res){
            console.log(req.params.id);
            res.json('Usuario atualizado ' + req.params.id);
        })
        .delete('/:id', function(req, res){
            console.log(req.params.id);
            res.json('Usuario excluido ' + req.params.id);
        });

    return router;
}

module.exports = routeContato;