const Discord = require('discord.js');
const client = new Discord.Client();
const Database = require("@replit/database")
const db = new Database()
var i = 0

const prefix = ',';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Music is online!');
	var tstatus = {
		status: "online",
		afk: false,
		activity: {
			name: client.guilds.cache.size + " guilds | prefix: ,",
			type: "WATCHING"
		}
	}
	client.user.setPresence(tstatus)
	.then(console.log)
	db.list("connected-").then(matches => {
		for (; i < matches; i++) {
			db.set(("connected-" + matches[i].toString()), false)
		}
	});
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'play' || command === "p") {
		client.commands.get('play').execute(message, args, Discord);
	}

	if (command === 'leave') {
		client.commands.get('leave').execute(message, args, Discord);
	}

	if (command === 'help' || command === "commands") {
		client.commands.get('help').execute(message, args, Discord);
	}

	if (command === 'donate') {
		client.commands.get('donate').execute(message, args, Discord);
	}

	if (command === 'info') {
		client.commands.get('info').execute(message, args, Discord);
	}

	if (command === 'invite') {
		client.commands.get('invite').execute(message, args, Discord);
	}

	if (command === 'clean') {
		client.commands.get('clean').execute(message, args, Discord);
	}

	if (command === 'join') {
		client.commands.get('join').execute(message, args, Discord);
	}
});



client.login('ODAwNDc3Mjg4Mjc2ODE5OTgw.YASskQ.NOnMMvZxnEiXWkYB-b7gPyGsI6U');