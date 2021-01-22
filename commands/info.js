module.exports = {
    name: 'info',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#4488ee')
        .setTitle('About RS Music')
        .setURL('https://www.twitter.com/DevvSilent')
        .setDescription('')
        .addFields(
            {name: 'Info', value: '[Website](https://www.twitter.com/DevvSilent) [Server](https://discord.gg/bEF2EFeQC5) [Add Melody](https://discord.com/oauth2/authorize?client_id=800477288276819980&scope=bot&permissions=0) [Donate](https://www.patreon.com/MelodyBot_)'},
        ) 
        .setImage('https://static.toiing.com/photo/msid-67586673/67586673/jpg?3918697')
        .setFooter('');

        message.channel.send(newEmbed); 
    }


}