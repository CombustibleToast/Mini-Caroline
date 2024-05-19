
module.exports = {
    name: "iscannon",
    trigger: /(is|are)\s.+can+on/im,
    guildWhitelist: [
        "947626014136221767",
        "602596055711875081"
    ],

    async execute(message){
        //reply
        await message.reply("https://media.discordapp.net/attachments/947626014136221770/1165399002439766066/IMG_5442.png");
    }
}