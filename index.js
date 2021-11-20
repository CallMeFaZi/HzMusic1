const { Player } = require('discord-player');
const { Discord } = require('discord.js');
const { Client, Intents } = require('discord.js');
const { MessageEmbed } = require('discord.js');

global.client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
    disableMentions: 'everyone',
});

client.config = require('./config');

global.player = new Player(client, client.config.opt.discordPlayer);

require('./src/loader');
require('./src/events');


client.login(`ODU3MTc4OTkwMzQyNDM4OTEz.YNL0JA.5KLl-OcBZLM2lx2P7dNUF_6br_o`);