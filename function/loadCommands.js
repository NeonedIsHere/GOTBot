const fs = require('fs')
const path = require('path')

async function loadCommand (dir, client) {
    const files = fs.readdirSync(dir)

    for (const file of files) {
        const fullPath = path.join(dir, file)
        const stat = fs.statSync(fullPath)

        if (stat.isDirectory()) {
            loadCommand(fullPath, client)
        } else if (file.endsWith('.js')) {
            const command = require(fullPath)

            if (!command.name) {
                console.log(`(WK-${process.pid}) [❌] » [Commands] Command ${fullPath} does not have a name property, Skipping...`)
                continue
            }

            client.commands.set(command.name, command)
            console.log(`(WK-${process.pid}) [📌] » [Commands] Commande chargé avec succès: ${command.name} depuis ${file}`)
        }
    }
}

module.exports = loadCommand