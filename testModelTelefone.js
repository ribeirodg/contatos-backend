const { Telefone, sequelize } = require('./database/models');

// Telefone.findByPk(1).then (
//     t => console.log(t.toJSON())
// )

// Telefone.findAll().then (
//     telefones => console.log(telefones.map (t => t.toJSON()))
// )

Telefone.create ( {numero: "0000-0000", contatos_id: 1}).then(
    tel => {
        console.log(tel.toJSON());
        sequelize.close()
    }
)