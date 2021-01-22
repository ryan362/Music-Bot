module.exports = {
    name: 'donate',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#4488ee')
        .setTitle('Donation Info')
        .setURL('https://www.patreon.com/MelodyBot_')
        .setDescription('')
        .addFields(
            {name: 'Donate', value: 'If you enjoy and use Melody, please consider donating to show your appreciation and love. Note: You get special rewards for donating!                              [Patreon](https://www.patreon.com/MelodyBot_)'},
        )
        .setImage('https://static.toiing.com/photo/msid-67586673/67586673/jpg?3918697')
        .setFooter('');

        message.channel.send(newEmbed); 
    }


}