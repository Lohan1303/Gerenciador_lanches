const mongoose = require('mongoose');

// URL para se conectar ao MongoDB
const url = 'mongodb://127.0.0.1:27017/gerenciamento_lanches';

mongoose.connect(url)
    .then(() => console.log("Conexão com MongoDB bem-sucedida"))
    .catch((error) => console.error("Erro ao conectar ao MongoDB:", error));

module.exports = mongoose;
