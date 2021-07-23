const Discord = require('discord.js')
const { MessageButton, MessageActionRow } = require('discord-buttons')

module.exports= {
name: 'setup',
run: (client, message, args) => {
  if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.channel.send({embed: { title: `❌ Ocorreu um erro`  , description: `${message.author} Você não possui a permissão de \`Administrador\` para executar este comando`, color: "FF0000"}}).then(msg => msg.delete({timeout: 15000}))


    const embed = new Discord.MessageEmbed()
    .setTitle("Suporte")
    .setDescription('Clique em **📩 Criar Ticket** para criar um ticket de suporte')
    .setColor('GREEN')
    let button = new MessageButton()
    .setStyle('gray')
    .setLabel('Criar Ticket')
    .setEmoji('📩')
    .setID('suporte')
    const row = new MessageActionRow()
    .addComponent(button)

    message.channel.send(embed, button, row);

}}