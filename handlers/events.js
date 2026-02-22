const { join } = require('path')
const loadEvent = require('../function/loadEvents')

module.exports = (client) => {
    const eventDir = join(__dirname, '../events')
    loadEvent(eventDir, client)
}