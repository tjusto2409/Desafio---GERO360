const contatosDao = require('../dao/ContatosDao'),
        returnPromiseJson = require('../helpers/returnPromiseJson'),
        convertDate = require('../helpers/convertDate');

class ContatosController {

    getContatos(req, res) {
        returnPromiseJson(contatosDao.getContatos(req.params.id), res);
    }

    saveContato(req, res) {
        req.body.dtNascimento = convertDate(req.body.dtNascimento);
        returnPromiseJson(contatosDao.saveContato(req.body), res);
    }

    updateContato(req, res) {
        req.body.dtNascimento = convertDate(req.body.dtNascimento);
        returnPromiseJson(contatosDao.updateContato(req.body, req.params.id), res);
    }

    deleteContato(req, res) {
        returnPromiseJson(contatosDao.deleteContato(req.params.id), res);
    }
}

module.exports = new ContatosController();