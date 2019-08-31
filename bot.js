const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NjEwNTY5MTU3MzQzMzEzOTU4.XWq2LQ.DrlEB6z9riCr343GSJCQkPZTVOI);
