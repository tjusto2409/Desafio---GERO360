require('dotenv/config');

const app = require('./config/express');

app.listen(process.env.APP_LISTEN_PORT, function() {
    console.log('Servidor escutando na porta: ' + this.address().port)
});