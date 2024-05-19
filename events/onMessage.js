const { Events } = require('discord.js');
const { client } = require('../index.js');
const { productionGuildId } = require('../secrets.json');

module.exports = {
    name: Events.MessageCreate,
    execute(message){
        //check if this iteration of the bot services this guild but allow all DMs
        if(message.guild != null && message.guild.id != productionGuildId){
            // console.log(`Received a message from another guild ${message.guild.id}`);
            return;
        }

        //check if message is from a bot
        if(message.author.bot)
            return;

        const triggeredFunction = client.functions.find(func => func.trigger ? func.trigger.test(message.content) : false);

        if(!triggeredFunction)
            return;

        console.log(`Processing message from ${message.author.username}: "${message.content}"`);
        try{
            triggeredFunction.execute(message);
        }
        catch(e){
            console.error(`Couldn't act on a message event:\n${e.stack}`);
        }
    }
}