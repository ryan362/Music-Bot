const Database = require("@replit/database")
const db = new Database()

module.exports = {
	name: "join",
	description: "joins the vc",
	async execute(message, args, Discord) {
		const voiceChannel = message.member.voice.channel;
		if (!voiceChannel) return message.channel.send(':x: **You have to be in a voice channel to use this command.**');
		const connection = await voiceChannel.join();
		db.set(("connected-" + message.guild.id.toString()), true)
		message.channel.send(`👍 **Joined** ${message.member.voice.channel.name}`)
	}
}