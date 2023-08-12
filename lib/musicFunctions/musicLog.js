const { musicLogChannelId } = require('../../secrets.json')
const { client } = require('../../index')

module.exports = {
    name: "musicLog",
    async execute(log) {
        const logChannel = client.channels.cache.get(musicLogChannelId);
        logChannel.send(log);
        console.log(log);
    }
}