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

    return u;
}