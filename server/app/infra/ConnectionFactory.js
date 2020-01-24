const Sequelize = require('sequelize');

class ConnectionFactory {
    constructor() {
        this.Sequelize = Sequelize;
        this.sequelize;
    }

    getConnection() {       
        return new Sequelize(
                process.env.DB_NAME, 
                process.env.DB_USERNAME, 
                process.env.DB_PASSWORD, 
                {
                    host: process.env.DB_HOST,
                    dialect: process.env.DB_DIALECT
                }
            );
    }

    testingConnection() {
        this.sequelize = this.getConnection();
        
        this.sequelize
            .authenticate()
            .then(() => {
                console.log('Conexão estabelecida com sucesso.');
            })
            .catch(err => {
                console.error('Ocorreu um erro ao se conectar com o banco de dados: ', err);
            });
    }
}

module.exports = new ConnectionFactory();