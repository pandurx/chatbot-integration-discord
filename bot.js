const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
	if (message.content === 'ping') {
		message.reply('pong');
	}
});

client.login("NDMxNDY0MTUzNDI1NjQxNTA0.DafIWw.YcBBDH7QEVKhVhBy7UL5yzPqR5s");
