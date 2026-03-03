const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    database: "gotbot",
    username: "root",
    host: "localhost",
    dialect: "mysql",
    logging: false
})

module.exports = sequelize