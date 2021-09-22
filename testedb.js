//Importar o sequelize e o query types
const { Sequelize, QueryTypes } = require('sequelize');

//Importar as minhas configurações
const config = require('./database/config/config.json').development;

//Criando a conexão com o banco de dados
const conexao = new Sequelize(config);

//Executar consulta de testes
conexao.query("select * from usuarios", {type: QueryTypes.SELECT}).then(
    dados=> {
        console.log(dados)
        process.exit()
    
    }
);

