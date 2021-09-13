const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'contatos', 'root', '_____senha_____', {
    host: 'localhost',
    dialect: 'mysql'
});


let teste = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        process.exit(0);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

teste();