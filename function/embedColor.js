const Theme = require("../data/theme");

async function embedColor(guild_id) {
    try {
        let color = await Theme.findOne({ where: { guild_id: guild_id } })

        if (!color) {
            color = await Theme.create({
                guild_id: guild_id,
                color: '#000001'
            })
        }

        return color.color
    } catch (e) {
        console.log(e)
        return "#000001"
    }
}

module.exports = embedColor