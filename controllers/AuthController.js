const bcrypt = require('bcrypt');
const {Sequelize, QueryTypes} = require("sequelize");
const dbConfig = require("../database/config/config.json").development;
const db = new Sequelize(dbConfig);

module.exports = {
    registrar: async (req, res)=>{
        const {nome, email, senha} = req.body;
        const hash = await bcrypt.hash(senha, 10);
        try {
            let sql = `INSERT INTO usuarios (nome, email, senha) VALUES (:nome,:email,:senha)`;
            const result = await db.query(
                sql, {
                    type: QueryTypes.INSERT,
                    replacements: {nome, email, senha: hash}
                });
        } catch (error) {
            return res.status(400).json({err:'Já existe um usuário cadastrado com este e-mail'});
        }
        
        return res.status(201).json({msg:'Ok'});
    },
    login: async (req, res) => {
        
        const {email, senha} = req.body;

        let sql = `SELECT id, nome, senha FROM usuarios WHERE email = :email`;
        const usuarios = await db.query(
            sql, {
                type: QueryTypes.SELECT,
                replacements: { email }
            });
        
        if(usuarios.length != 1){
            return res.status(403).json({err:"Falha no login"});
        }

        let usuario = usuarios[0];
        let senhaOk = await bcrypt.compare(senha, usuario.senha)
        
        if(!senhaOk){
            return res.status(403).json({err:"Falha no login"});
        }
        
        return res.status(200).json({id:usuario.id, nome:usuario.nome, email});
    }
}