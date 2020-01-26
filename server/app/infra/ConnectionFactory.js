const Sequelize = require('sequelize');

class ConnectionFactory {
    constructor() {
        this.Sequelize = Sequelize;
        this.connection = {
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT
        };

        this.testingConnection()
            .then(
                newConnection => this.sequelize = newConnection
            );
    }

    getConnection(connection) {       
        return new Sequelize(connection);
    }
    testingConnection() {   

        let sequelize = this.getConnection(this.connection);

        return sequelize
            .authenticate()
            .then(() => {
                console.log('Conexão estabelecida com sucesso.');
                return this.createDataBase(sequelize);          
            })
            .catch(err => {
                console.error('Ocorreu um erro ao se conectar com o banco de dados: ', err);                 
            });
    }
    createDataBase(sequelize) {
        return sequelize
            .query(`SHOW DATABASES LIKE '${process.env.DB_NAME}'`)
            .then(res => {
                const dataBaseExist = !!res.map(array => array.length)
                                            .reduce((prev,curr) => prev + curr);

                if(!dataBaseExist) {
                    return sequelize
                        .query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`)
                        .then(_ => {
                            console.log(`Banco de dados "${process.env.DB_NAME}" criada com sucesso!`);
                            return this.newConnection(sequelize);
                        })
                        .catch(error => console.error(`Ocorreu um erro ao tentar criar a base de dados "${process.env.DB_NAME}"`, error));
                } else {
                    console.log(`Banco de dados "${process.env.DB_NAME}" já existe.`);
                    return this.newConnection(sequelize);
                }
            })
            .catch(error => console.error(error))
    }

    newConnection(sequelize) {
        sequelize.close();
        this.connection.database = process.env.DB_NAME;
        return this.getConnection(this.connection);
    }
}

module.exports = ConnectionFactory;