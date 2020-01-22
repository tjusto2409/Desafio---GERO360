const routeContato = require('./routeContato');

module.exports = function(app, router) {
    app.use('/contatos', routeContato(router));
}