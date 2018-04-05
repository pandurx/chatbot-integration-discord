var Discord = require('discord.io');
var logger = require('winston');


// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});

logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: "NDMxNDY0MTUzNDI1NjQxNTA0.DafIWw.YcBBDH7QEVKhVhBy7UL5yzPqR5s",
   autorun: true
});



bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
    
    console.log('i have been reborn again!');
    bot.setPresence( { 
        game: 
            { name: 'you play', type: 3 }
    });
    
    
    const { Client } = require('pg');
    
});




bot.on('message', function (user, userID, channelID, message, evt) {

    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
                
                console.log("pong!");
            break;

            // Just add any case commands if you want to..
         }
     }
});