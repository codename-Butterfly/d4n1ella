const commando = require('discord.js-commando');

class RateMyChannel extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'ratemychannel',
            group: 'random',
            memberName: 'ratemychannel',
            description: 'Rates your YouTube channel.'
        });
    }

    async run(message) {
        var answer = Math.floor(Math.random() * 100) + 1;
        message.reply("your YouTube channel is " + answer + "% good");
    }
}

module.exports = RateMyChannel;