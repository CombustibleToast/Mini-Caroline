
module.exports = {
    name: "crazy",
    trigger: /^(?!\s*$)(?:crazy| )+$/i, //from https://stackoverflow.com/questions/29207535/regular-expression-for-recognizing-the-string-that-contains-only-specific-words
    guildWhitelist: [
        "947626014136221767",
        "602596055711875081"
    ],
    
    async execute(message){
        //read the blacklist file
        /*
        const fs = require('fs');
        let blacklistedUserList;
        try{
            blacklistedUserList = JSON.parse(fs.readFileSync(`${__dirname}/crazyBlacklist.json`));
        }
        catch(e){
            console.error(`Unable to crazy a user:\n${e}`)
            return;
        }

        //check if the user is blacklisted
        if(blacklistedUserList.users.includes(message.author.id))
            return;
        */

        //reply
        // message.reply("https://cdn.discordapp.com/attachments/439519668819066880/807339991889739837/image0-69.gif"); //img is dead
        message.reply("https://cdn.discordapp.com/attachments/1126576043592007800/1162219546858496030/0001-0118.mp4");
        // message.channel.send("||Say \"no crazy\" to disable crazy||");
    }
}