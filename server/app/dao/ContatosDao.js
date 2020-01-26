const ConnectionFactory = require('../infra/ConnectionFactory'),
contatosModel = require('../models/contatos');

class ContatosDao extends ConnectionFactory {
    getContatos(id) {
        let where = {};

        if(!!id) where = { id };

        return contatosModel(this.sequelize, this.Sequelize.DataTypes)
                .findAll({
                    where
                });        
    }

    saveContato(contato) {
        return contatosModel(this.sequelize, this.Sequelize.DataTypes)
                .create(contato);
    }

    updateContato(contato, id) {
        return contatosModel(this.sequelize, this.Sequelize.DataTypes)
                .update(contato, {
                    where: {
                        id
                    }
                });
    }

    deleteContato(id) {
        return contatosModel(this.sequelize, this.Sequelize.DataTypes)
                .destroy({
                    where: {
                        id
                    }
                });
    }
}

module.exports = new ContatosDao();