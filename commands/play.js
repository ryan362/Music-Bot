const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const Discord = require('discord.js')
const Database = require("@replit/database")
const db = new Database()

const musicEmbed = new Discord.MessageEmbed()
	.setColor('#4488ee')
	.addFields(
		{
			name: ':x: **Invalid Usage**',
			value: ',play [URL or Keywaord]'
		},
	);

module.exports = {
	name: 'play',
	description: 'Joins and plays a video from youtube',
	async execute(message, args) {
		const voiceChannel = message.member.voice.channel;
		const connected = db.get("connected-" + message.guild.id.toString())
		if (!voiceChannel) return message.channel.send(':x: **You have to be in a voice channel to use this command.**');
		const permissions = voiceChannel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT')) return message.channel.send('You dont have the correct permissins');
		if (!permissions.has('SPEAK')) return message.channel.send('You dont have the correct permissins');
		if (!args.length) return message.channel.send(musicEmbed);

		const validURL = (str) => {
			var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
			if (!regex.test(str)) {
				return false;
			} else {
				return true;
			}
		}

		if (validURL(args[0])) {

			const connection = await voiceChannel.join();
			const stream = ytdl(args[0], { filter: 'audioonly' });
			connection.voice.setDeaf(true, 'Auto-Deafen')
			connection.play(stream, { seek: 0, volume: 1 })
				.on('finish', () => {
					voiceChannel.leave();
					message.channel.send('leaving channel');
				})
			await message.reply(`:thumbsup: Now Playing ***Your Link!***`)

			return
		}

		const connection = await voiceChannel.join();

		const videoFinder = async (query) => {
			const videoResult = await ytSearch(query);

			return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;

		}

		const video = await videoFinder(args.join(' '));

		if (video) {
			const stream = ytdl(video.url, { filter: 'audioonly' });
			connection.voice.setDeaf(true, 'Auto-Deafen')
			connection.play(stream, { seek: 0, volume: 1 })
				.on('finish', () => {
					if (db.get("connected-" + message.guild.id.toString()) == false) {
						voiceChannel.leave();
					}
				});

			await message.reply(`:thumbsup: Now Playing ***${video.title}***`)
		} else {
			message.channel.send('No video results found');
		}
	}
}
