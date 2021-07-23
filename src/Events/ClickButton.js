const { MessageButton, MessageActionRow } = require('discord-buttons')
const { MessageEmbed } = require('discord.js');

const embed = new MessageEmbed()
.setTitle("Suporte")
.setDescription('Clique em **📩 Fechar Ticket** para fechar o suporte')
.setColor('GREEN')
let botao = new MessageButton()
.setStyle('gray')
.setLabel('Fechar Ticket')
.setEmoji('📩')
.setID('ticketclose')
const row = new MessageActionRow()
.addComponent(botao)

module.exports = async function (client) {
client.on("clickButton", async (button) => {
    if(button.id == 'suporte') {
        const member = button.clicker.member
        const canal = member.guild.channels.cache.find(ch => ch.name === `${member.id}`);
        if (canal) return member.guild.channel.send(`${member} Seu ticket atual já está aberto em: ${canal}!`).then(msg => msg.delete({timeout: 15000}));
        member.guild.channels.create(`${member.id}`, {
            type : 'text',
            permissionOverwrites : [
                {
                    id : member.guild.id,
                    deny : ['VIEW_CHANNEL']
                },
                {
                    id : member.id,
                    allow : ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ATTACH_FILES']
                }
            ]
        }).then(async channel => {
            channel.send(`Olá ${member}, este é o seu ticket!`)
            channel.send(embed, botao, row)
        })
    }})

client.on("clickButton", async (button) =>{
    if(button.id == 'ticketclose') {
        const member = button.clicker.member
        const channel = member.guild.channels.cache.find(ch => ch.name === `${member.id}`)
        channel.delete()
    }
})}