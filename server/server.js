require('dotenv/config');

const express = require('express'),
    app = express();

app.listen(process.env.APP_LISTEN_PORT, function() {
     console.log('Servidor escutando na porta: ' + this.address().port)
});