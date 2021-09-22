module.exports = (sequelize, DataTypes) =>{
    const Telefone = sequelize.define(
        'Telefone', {
                
        numero: DataTypes.STRING,
        contatos_id: DataTypes.INTEGER
        },

        {
            tableName:'telefones',
            timestamps: false
        }
    )

    return Telefone;
}