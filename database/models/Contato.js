module.exports = (sequelize, DataTypes) => {

    const c = sequelize.define(
        'Contato',
        {
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            usuarios_id: DataTypes.INTEGER
        },

        {
            tableName:'contatos',
            timestamps: false
        }
    );
    c.associate = (models) => {
        //Associando usuário com contatos
        c.hasMany(models.Telefone, {as:'telefones', foreignKey:'contatos_id'}); //um para muitos...
        //muitos para muitos
        c.belongsTo(models.Usuario, {as:'usuario', foreignKey:'usuarios_id'});
          //um para um

    }
    return c;
}