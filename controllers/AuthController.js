const {Usuario} = require('../database/models');
const bcrypt = require('bcrypt');

    module.exports = {
    registrar: async (req, res)=>{
        let {nome, email, senha} = req.body;

        try{
        let novoUsuario = await Usuario.create({nome, email, senha:bcrypt.hashSync(senha,10)});
        return res.status(201).json(novoUsuario);
        } catch {
            return res.status(409).json({error:1, msg:"Usuário já cadastrado com esse e-mail"});
        }

       
        // console.log('registrando...');
        // console.log('body', req.body);
        // let nome = req.body.nome;
        // let email = req.body.email;
        // let senha = req.body.senha;
        // let usuario = await Usuario.create ( {nome: nome, email: email, senha: senha})

    //    return res.send('registrando...');
    },
    login: (req, res) => {
        console.log('logando...');
       return res.send('logando...');
    }
}
// AuthController.registrar();
// module.exports = AuthController;