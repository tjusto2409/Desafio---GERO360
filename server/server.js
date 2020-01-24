require('dotenv/config');

const app = require('./app/config/express'),
    connectionFactory = require('./app/infra/ConnectionFactory');

app.listen(process.env.APP_LISTEN_PORT, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
    connectionFactory.testingConnection();
});