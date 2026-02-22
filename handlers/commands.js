const { join } = require('path')
const loadCommand = require('../function/loadCommands')

module.exports = (client) => {
    const commandDir = join(__dirname, '../commands')
    loadCommand(commandDir, client)
}