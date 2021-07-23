const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const config = require("./config.json");


["Ready", "Message", "ClickButton"].forEach(handler => {
    require(`./src/Events/${handler}`)(client);
});

require('discord-buttons')(client);



client.login(config.token);
