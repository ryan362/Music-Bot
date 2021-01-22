const Database = require("@replit/database")
const db = new Database()

module.exports = {
    name: 'leave',
    description: 'stop the bot and leave the channel',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("**:x: I'm not in a voice channel. Type** ``,join`` **to get me in one.**");
        await voiceChannel.leave();
        await message.channel.send(':white_check_mark: Successfully Left')
				db.set("connected-" + message.channel.id.toString(), false)
    }
}