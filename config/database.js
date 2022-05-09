const Sequelize = require('sequelize')


sequelize = new Sequelize('nodejsDB', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    underscored: true

})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}