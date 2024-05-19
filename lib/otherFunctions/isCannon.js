
module.exports = {
    name: "iscannon",
    trigger: /is.+can+on/im,

    async execute(message){
        //reply
        await message.reply("https://media.discordapp.net/attachments/947626014136221770/1165399002439766066/IMG_5442.png");
    }
}