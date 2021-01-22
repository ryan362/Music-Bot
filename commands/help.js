module.exports = {
    name: 'help',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#4488ee')
        .setTitle('Music Help')
        .setURL('https://www.twitter.com/DevvSilent')
        .setDescription('')
        .addFields(
            {name: 'Commands?', value: ' You can find them [here](https://www.twitter.com/DevvSilent)'},
            {name: 'New to music?', value: 'Check our [FAQ](https://www.twitter.com/DevvSilent)'},
            {name: 'Still need help??', value: '[Click here](https://www.twitter.com/DevvSilent) to join our discord server'},
        )
        .setImage('https://static.toiing.com/photo/msid-67586673/67586673/jpg?3918697')
        .setFooter('Music Help');

        message.channel.send(newEmbed); 
    }


}