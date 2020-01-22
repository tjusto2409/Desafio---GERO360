const express = require('express'),
    app = express();

app.listen(3000, function() {
     console.log('Servidor escutando na porta: ' + this.address().port)
});