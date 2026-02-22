const { Sequelize } = require('sequelize')
const fs = require('fs')
const path = require('path')
const loadTables = require('../function/loadTables')
const sequelize = require('./sequelize')
const config = require('../config.json')

const tables = loadTables(sequelize, path.join(__dirname, '../data'))

sequelize.authenticate()
    .then(async () => {
        console.log(`(WK-${process.pid}) [🛢️] » [SQL] Connexion MySQL réussie`)
        await sequelize.sync({ alter: true })
    })
    .then(() => console.log(`(WK-${process.pid}) [🛢️] » [SQL] Tables synchronisées`))
    .catch((err) => console.log(`(WK-${process.pid}) [🛢️] » [SQL] Connexion MySQL échouer:`, err))

module.exports = { sequelize, tables }