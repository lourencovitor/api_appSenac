const express = require('express');
const routes = require('./routes');
const app = express();
const cors = require('./services/cors');

app.use(express.json());
app.use(cors())
app.use(routes);

app.listen(8000, () => {
    console.log("Servidor Rodando em http://localhost:8000");
})
