const { Usuario} = require('./database/models');

Usuario.findByPk(1).then (
    u => console.log(u.toJSON())
)

Usuario.findAll().then (
    usuarios => console.log(usuarios.map (u => u.toJSON()))
)

Usuario.create ( {nome: "Iago", email: "iago@dh.com.br", senha: "segredo"})