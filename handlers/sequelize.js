const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    database: "Exia_Gestion",
    username: "root",
    host: "localhost",
    dialect: "mysql",
    logging: false
})

module.exports = sequelize