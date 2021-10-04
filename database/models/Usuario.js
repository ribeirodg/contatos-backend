module.exports = (sequelize, DataTypes) =>{

    const u = sequelize.define(
        'Usuario',
        {
            // idUsuario: {type: DataTypes.INTEGER, autoincrement: true, primaryKey: true},
            nome: DataTypes.STRING,
            email: {type: DataTypes.STRING, notNull: true},
            senha: DataTypes.STRING

        },

        {
            tableName: "usuarios",
            timestamps: false

        },
    );
    // u.associate = (models) => {
    //     //Associando usuário com contatos
    //     u.hasMany(models.Contato, {as:'contatos', foreignKey:'usuarios_id'}); //um para muitos...
    //     //muitos para muitos
    //     u.belongsToMany(models.Usuario, 
    //         {
    //             as:'colegas', //Nome do relacionamento
    //             through: 'amizades', //Nome da tabela intermediária
    //             foreignKey:'usuarios1_id', //id do model codado na tabela intermediária
    //             otherKey:'usuarios2_id', //id do model relacionado na tabela intermediária
    //             timestamps: false
    //         }
    //         )
    //     //um para um
    //         u.hasOne(models.Perfil, {as:perfil, foreignKey:'usuarios_id'});
    //         u.belongsTo
    // }
    return u;
}