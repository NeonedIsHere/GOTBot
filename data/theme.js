const { INTEGER, STRING } = require("sequelize");
const sequelize = require("../handlers/sequelize");

const Theme = sequelize.define('Theme', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    guild_id: {
        type: STRING,
        allowNull: false,
    },
    color: {
        type: STRING,
        allowNull: false,
        defaultValue: "#000001"
    },
},  {
    timestamps: true,
    tableName: "theme"
})

module.exports = Theme